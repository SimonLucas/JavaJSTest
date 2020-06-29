package games.arcade

import agents.SimpleEvoAgent
import games.arcade.AsteroidsGame.Companion.neutralAction
import games.arcade.vehicles.Asteroid
import games.arcade.vehicles.Ship
import ggi.AbstractGameState
import ggi.ExtendedAbstractGameState
import gui.*
import math.Vec2d
import util.BoxMuller
import kotlin.math.PI
import kotlin.math.min
import kotlin.random.Random

enum class MoveAction { Neutral, Left, Right, Up, Down, Fire, Jump, Thrust }

// not sure where
enum class ObjectType { Avatar, P1Missile, AlienMissile, AlienObject }

data class AsteroidsParams(
    val nLives: Int = 3
)

class AsteroidsGame(
    var w: Double = 640.0, var h: Double = 480.0,
    val gobs: ArrayList<GameObject> = ArrayList(),
    var ticks: Int = 0,
    var intScore: Int = 0

) : ExtendedAbstractGameState {

    val rockSizes = arrayOf(0.06, 0.035, 0.02)
    val rockScores = arrayOf(10, 20, 50)
    val velocityFactor = 1.0
    val bm = BoxMuller()

    val nRocks = 5
    val rand = Random
    var gobMap = HashMap<ObjectType, ArrayList<GameObject>>()
    var avatarAlive = true
    var rockCount = nRocks

    init {
        if (gobs.isEmpty()) randomInitialState()
    }

    override fun copy(): AbstractGameState {
        val cp = ArrayList<GameObject>()
        gobs.forEach { cp.add(it.copy()) }
        val gameCopy = AsteroidsGame(w, h, cp, ticks, intScore)
        // gameCopy.intScore = intScore
        gameCopy.avatarAlive = avatarAlive
        gameCopy.rockCount = rockCount
        return gameCopy
    }




    fun createRocks(sizeIndex: Int = 0) {
        for (i in 0 until nRocks) {
            gobs.add(randRock(sizeIndex))
        }
    }

    // todo fix the error here - the score depends on these things/..
    fun avatarStatus() = gobMap[ObjectType.Avatar] != null
    fun countRocks() = gobMap[ObjectType.AlienObject]?.size

    val nSpawns = 2

    fun handleRockDeath(rock: Rock) {
        intScore += rockScores[rock.sizeIndex]
        val nextIndex = rock.sizeIndex + 1
        // add new rocks if needed
        if (nextIndex < rockSizes.size)
            for (i in 0 until nSpawns)
                addObject(randRock(nextIndex, rock.s))

    }

    fun randRock(sizeIndex: Int, s: Vec2d = randPosition()): Rock {
        val size = min(w, h)
        val poly = Asteroid(8, size * rockSizes[sizeIndex]).getPoly()
        val v = Vec2d(bm.nextGaussian(), bm.nextGaussian()) * velocityFactor
        return Rock(poly, s, v, sizeIndex)
    }

    fun randPosition() = Vec2d(rand.nextDouble(w), rand.nextDouble(h))

    fun gameObjects() = gobs


    companion object {
        internal var totalTicks = 0L
        val lifeLossPenalty = 0
        val collisionMap = hashMapOf<ObjectType, List<ObjectType>>(
            ObjectType.Avatar to arrayListOf(ObjectType.AlienObject),
            ObjectType.P1Missile to arrayListOf(ObjectType.AlienObject)

        )
        var useActionAdapter = true
        val actionAdapter = ActionAdapter()
        val neutralAction = ShipAction()
    }

    // val actionAdapter : ActionAdapter? = ActionAdapter()


    fun testCollisions(gobs: ArrayList<GameObject>) {
        gobMap.clear()
        for (g in gobs) {
            if (gobMap[g.type] == null) gobMap[g.type] = ArrayList()
            gobMap[g.type]?.add(g)
        }
        // if there is no avatar then the game is over
        avatarAlive = gobMap[ObjectType.Avatar] != null
        rockCount = gobMap[ObjectType.AlienObject]?.size ?: 0

        testCollisions(gobMap)
    }

    fun testCollisions(obMap: Map<ObjectType, List<GameObject>>) {
        // loop over th objecct types testing for collisions in each case
        for (a in collisionMap.keys) {
            val canCollideWith = collisionMap[a]
            if (canCollideWith != null) {
                for (b in canCollideWith) {
                    // now we get all objects of type a
                    // and test collisions for all objects of type b
                    // println()
                    testCollisions(gobMap[a], gobMap[b])
                }
            }
        }
    }

    fun testCollisions(al: List<GameObject>?, bl: List<GameObject>?) {
        if (al == null || bl == null) return
        for (a in al) {
            for (b in bl) {
                a.testCollision(b)
            }
        }
    }

    override fun totalTicks(): Long {
        return totalTicks
    }

    override fun resetTotalTicks() {
        totalTicks = 0L
    }

    override fun randomInitialState(): AbstractGameState {
        createRocks()
        addShip()
        return this
    }

    private fun addShip() {
        gobs.add(PlayerShip(Vec2d(w / 2, h / 2)))
    }

    override fun next(actions: IntArray): AbstractGameState {
        return next(actionAdapter.getAction(actions[0]))
    }

    fun next(action: ShipAction): AbstractGameState {
        // if (action == null) return this
        val safeCopy = ArrayList<GameObject>()
        safeCopy.addAll(gobs)
        testCollisions(gobs)
        // now clear the object list and add the surviving objects
        gobs.clear()
        safeCopy.forEach { if (it.alive) gobs.add(it) }

        // now update the ones in the safe copy (may include dead ones by now, no problem)
        // the action of updating them may add new game objects into gobs
        safeCopy.forEach { it.update(w, h, action, this) }
        totalTicks++
        ticks++
        return this
    }

    val actionMap = hashMapOf<Int, MoveAction>(
        0 to MoveAction.Neutral,
        1 to MoveAction.Left,
        2 to MoveAction.Right,
        3 to MoveAction.Fire,
        4 to MoveAction.Thrust
    )

    override fun nActions(): Int {
        return if (useActionAdapter)
            actionAdapter.actions.size
        else
            actionMap.size
    }

    fun nObjects() = gobs.size

    // var intScore = 0

    override fun score(): Double {
        return intScore.toDouble()
    }

    override fun isTerminal(): Boolean {
        return !avatarAlive && rockCount > 0
    }

    override fun nTicks(): Int {
        return ticks
    }

    fun addObject(gob: GameObject) {
        gobs.add(gob)
    }

    fun shipDeath() {
        intScore -= lifeLossPenalty
    }
}

open class GameObject(
    val geometry: GeomDrawable,
    var type: ObjectType = ObjectType.AlienObject,
    var s: Vec2d = Vec2d(),
    var v: Vec2d = Vec2d(),
    var rot: Double = 0.0,
    var rotRate: Double = PI / 180,
    var alive: Boolean = true,
    var colliding: Boolean = false,
    var age: Int = 0

) {

    fun copy() = GameObject(geometry, type, s, v, rot, rotRate, alive, colliding, age)

    fun collides(a: GameObject, b: GameObject) =
        a.alive && b.alive &&
        a.s.distanceTo(b.s) <= a.geometry.radius() + b.geometry.radius()

    fun collidesContainer(a: GameObject, b: GameObject) =
        geometry.contains(b.s) || b.geometry.contains(s)

    fun testCollision(b: GameObject): Boolean {
        // the effects of the collision may depend on many things
        // in each case we currently leave the game object to take
        // the actions it needs to, then return whether or not the collision occured
        if (collides(this, b)) {
            applyCollision(b)
            return true
        } else return false
    }

    fun applyCollision(b: GameObject) {

        // simplest case, a and b both die
//        println("Colliding $this with $b")
//        println("${this.s}, ${b.s}, ${this.s.distanceTo(b.s)}")
//        println(this.geometry.contains(b.s))
//        println(b.geometry.contains(s))

        if (b.geometry.contains(s)) {
            this.alive = false
            this.colliding = true
            b.colliding = true
            b.alive = false
        }

    }

    open fun update(w: Double, h: Double, action: ShipAction = neutralAction, game: AsteroidsGame? = null) {
        s += v
        s = wrap(s, w, h)
        rot += rotRate
        geometry.centre = s
        geometry.rotation = rot
        age++
        geometry.dStyle.fill = colliding
    }

    fun wrap(v: Vec2d, w: Double, h: Double) =
        Vec2d((v.x + w) % w, (v.y + h) % h)
}

class PlayerShip(s: Vec2d) : GameObject(
    Ship().getPoly(), ObjectType.Avatar, s, rotRate = 0.0
) {
    // this is the direction heading vector, which is tied to the ship's rotation
    init {
        geometry.dStyle.lc = XColor.magenta
    }

    var d = Vec2d(0.0, -1.0)

    val turn = 10 * PI / 180.0
    val thrustFac = 0.5
    val lossFac = 0.95

    // time to wait between missile firings
    val cooldown = 10
    var wait = 0

    override fun update(w: Double, h: Double, action: ShipAction, game: AsteroidsGame?) {
        super.update(w, h, action, game)
        if (wait > 0) wait--
        if (action.fire) fireMissile(game)
        if (action.thrust) v = v + (d.rotatedBy(rot) * thrustFac)
        v *= lossFac
        rot += action.turn * turn
        geometry.dStyle.stroke = colliding
        geometry.dStyle.fill = true
        if (colliding) game?.shipDeath()
    }

    val missileSpeed = 7.0

    private fun fireMissile(game: AsteroidsGame?) {
        // println("Firing in $game")
        if (game == null) return
        if (wait <= 0) {
            wait = cooldown
            // now fire the missile
            val missile = Missile(s, d.rotatedBy(rot) * missileSpeed)
            game.addObject(missile)
        }
    }
}

class Rock(poly: GeomDrawable, s: Vec2d, v: Vec2d, var sizeIndex: Int = 0) : GameObject(
    poly, ObjectType.AlienObject, s, v
) {
    override fun update(w: Double, h: Double, action: ShipAction, game: AsteroidsGame?) {
        if (colliding)
            game?.handleRockDeath(this)
        super.update(w, h, action, game)
    }
}

class Missile(s: Vec2d, v: Vec2d) : GameObject(
    XEllipse(Vec2d(), 10.0, 10.0),
    ObjectType.P1Missile, s, v
) {

    val lifeTime = 50
    var toLive = lifeTime

    override fun update(w: Double, h: Double, action: ShipAction, game: AsteroidsGame?) {
        toLive--
        if (toLive < 0) alive = false
        if (colliding) alive = false
        super.update(w, h, action, game)
    }
}


interface RolloutDataSource {
    fun getData() : List<DoubleArray>?

}

class ArcadeTestApp : XApp, RolloutDataSource {
    var mp: Vec2d? = null
    var game: AsteroidsGame? = null
    var controller = AsteroidsKeyController()

    var agent: SimpleEvoAgent? = SimpleEvoAgent(nEvals = 20,
        sequenceLength = 100, probMutation = 0.2, discountFactor = 0.98)

    init {
        // agent = null
    }

    override fun getData() : List<DoubleArray>? {
        return agent?.scores
    }

    override fun paint(xg: XGraphics) {
        if (game == null) game = AsteroidsGame(xg.width(), xg.height())
        val safe = game  // ?.copy() as AsteroidsGame
        if (safe == null) return

        val actionAI =
            if (agent != null && game != null)
                agent?.getAction(game!!, 0)
            else null


        if (actionAI == null) {
            safe.next(controller.getAction(safe, 0))
        } else {
            safe.next(intArrayOf(actionAI))
        }

        // now for drawing, make a copy of the state first
        val gobs = safe.gameObjects()
        val bgstyle = XStyle(fg = XColor.black)
        xg.draw(XRect(xg.centre(), xg.width(), xg.height(), bgstyle))
        gobs.forEach { xg.draw(it.geometry) }
        xg.draw(statusText(xg))

    }

    private fun statusText(xg: XGraphics): Drawable {
        val rocks = game?.countRocks() ?: 0
        val avatar = game?.avatarStatus()
        val str = "Score: ${game?.intScore}, [$avatar, $rocks, ${game?.nTicks()}]"
        val text = XText(
            str, Vec2d(xg.width() / 2, xg.height() / 20)
        )
        return text
    }

    override fun handleMouseEvent(e: XMouseEvent) {
        // println(e)
        mp = e.s
    }

    override fun handleKeyEvent(e: XKeyEvent) {
        // need a standard keymap approach here
        controller.handleKeyEvent(e)
    }

}

class AsteroidsKeyController {

    val action = ShipAction()

    fun handleKeyEvent(e: XKeyEvent) {
        // println(e)
        if (e.t == XKeyEventType.Pressed || e.t == XKeyEventType.Down) {
            keyPressed(e.keyCode)
            // println("Set current key to $currentKey")
        } else if (e.t == XKeyEventType.Released) {
            keyReleased(e.keyCode)
        }
    }

    fun keyPressed(keyCode: Int) {
        when (keyCode) {
            XKeyMap.left -> action.turn = -1.0
            XKeyMap.right -> action.turn = 1.0
            XKeyMap.space -> action.fire = true
            XKeyMap.up -> action.thrust = true
        }
    }

    fun keyReleased(keyCode: Int) {
        when (keyCode) {
            XKeyMap.left -> action.turn = 0.0
            XKeyMap.right -> action.turn = 0.0
            XKeyMap.space -> action.fire = false
            XKeyMap.up -> action.thrust = false
        }
    }

    fun getAction(gameState: AbstractGameState, playerId: Int) = action

    fun getAgentType(): String {
        return "Asteroids Key Controller"
    }
}

data class ShipAction(var turn: Double = 0.0, var thrust: Boolean = false, var fire: Boolean = false)

class ActionAdapter {
    var actions = ArrayList<ShipAction>()

    init {
        for (turn in sequenceOf(-1.0, 0.0, 1.0))
            for (thrust in sequenceOf(false, true))
                for (fire in sequenceOf(false, true)) {
                    actions.add(ShipAction(turn, thrust, fire))
                }
    }

    fun getAction(i: Int): ShipAction {
        return actions[i]
    }
}
