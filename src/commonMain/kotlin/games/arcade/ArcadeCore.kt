package games.arcade

import agents.PolicyEvoAgent
import agents.SimpleEvoAgent
import games.arcade.AsteroidsGame.Companion.neutralAction
import games.arcade.vehicles.Asteroid
import games.arcade.vehicles.Ship
import ggi.AbstractGameState
import ggi.ExtendedAbstractGameState
import ggi.SimplePlayerInterface
import gui.*
import math.Vec2d
import util.BoxMuller
import kotlin.math.PI
import kotlin.math.min
import kotlin.random.Random
data class AsteroidsParams(
    val nLives: Int = 3
)

class AsteroidsGame(
    var w: Double = 640.0, var h: Double = 480.0,
    val gobs: ArrayList<GameObject> = ArrayList(),
    var ticks: Int = 0,
    var intScore: Int = 0

) : ExtendedAbstractGameState {

    val rockSizes = arrayOf(0.06, 0.04, 0.02)
    val rockScores = arrayOf(50, 100, 200)
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
        val rocks = ArrayList<Rock>()
        while (rocks.size < nRocks) {
            val rock = randRock(sizeIndex)
            if (acceptRock(rock)) rocks.add(rock)
        }
        gobs.addAll(rocks)
    }

    fun acceptRock(rock: Rock) : Boolean {
        return (Vec2d(w/2,h/2).distanceTo(rock.s) > min(w/4, h/4))
    }

    // todo fix the error here - the score depends on these things/..
    fun avatarStatus() = gobMap[ObjectType.Avatar] != null
    fun countRocks() = gobMap[ObjectType.AlienObject]?.size

    val nSpawns = 3

    fun handleRockDeath(rock: Rock) {
        print("Rock died")
        intScore += rockScores[rock.sizeIndex]
        val nextIndex = rock.sizeIndex + 1
        // add new rocks if needed
        if (nextIndex < rockSizes.size)
            for (i in 0 until nSpawns)
                print("Adding rock $i")
                addObject(randRock(nextIndex, rock.s))

    }

    fun randRock(sizeIndex: Int, s: Vec2d = randPosition()): Rock {
        val size = min(w, h)
        val rad = size * rockSizes[sizeIndex]
        val poly = Asteroid(8, rad).getPoly()
        val v = Vec2d(bm.nextGaussian(), bm.nextGaussian()) * velocityFactor
        val ellipse = XEllipse(s, rad*2, rad*2)
        // return Rock(poly, s, v, sizeIndex)
        return Rock(ellipse, s, v, sizeIndex)
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
        print("Rock count = $rockCount")
        testCollisions(gobMap)
    }

    fun testCollisions(obMap: Map<ObjectType, List<GameObject>>) {
        // loop over th object types testing for collisions in each case
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

    open fun radius() = geometry.radius()

    open fun copy() = GameObject(geometry, type, s, v, rot, rotRate, alive, colliding, age)

    fun collides(a: GameObject, b: GameObject) =
        a.alive && b.alive &&
                a.s.distanceTo(b.s) <= a.radius() + b.radius()

    fun collidesContainer(a: GameObject, b: GameObject) =
        geometry.contains(b.s) || b.geometry.contains(s)

    fun testCollision(b: GameObject): Boolean {
        // the effects of the collision may depend on many things
        // in each case we currently leave the game object to take
        // the actions it needs to, then return whether the collision occured
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

class PlayerShip(
    s: Vec2d, v: Vec2d = Vec2d(), rot: Double = 0.0,
    var wait: Int = 0
) :
    GameObject(
        Ship().getPoly(), ObjectType.Avatar, s, v, rotRate = 0.0, rot = rot
    ) {

    override fun copy() = PlayerShip(s, v, rot, wait)

    init {
        geometry.dStyle.lc = XColor.magenta
    }

    // var d = Vec2d(0.0, -1.0)

    val d: Vec2d = Vec2d(0.0, -1.0)
    val turn = 10 * PI / 180.0
    val thrustFac = 0.5
    val lossFac = 0.97

    // time to wait between missile firings
    val cooldown = 10
    // var wait = 0

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
    val missileLifetime = 50

    private fun fireMissile(game: AsteroidsGame?) {
        // println("Firing in $game")
        if (game == null) return
        if (wait <= 0) {
            wait = cooldown
            // now fire the missile
            val missile = Missile(s, d.rotatedBy(rot) * missileSpeed, missileLifetime, true)
            game.addObject(missile)
        }
    }
}

class Missile(s: Vec2d, v: Vec2d, var toLive: Int = 5, alive: Boolean = true) : GameObject(
    XEllipse(Vec2d(), 10.0, 10.0),
    ObjectType.P1Missile, s, v, alive = alive
) {

    override fun copy() = Missile(s, v, toLive, alive)

    override fun radius(): Double {
        return 2 * super.radius()
    }

    override fun update(w: Double, h: Double, action: ShipAction, game: AsteroidsGame?) {
        toLive--
        if (toLive < 0) alive = false
        if (colliding) alive = false
        super.update(w, h, action, game)
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

    override fun copy() = Rock(geometry, s, v, sizeIndex)

}

