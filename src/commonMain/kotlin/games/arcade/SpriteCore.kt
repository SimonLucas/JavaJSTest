package games.arcade

// todo: add a new type of rock / obstacle that is indestructible
// todo: add a clean way to make new game states
// todo: add a route-plan facility as a sequence of waypoints -
//  will be displayed but the only interaction will be as a navigation aid
// todo: add a way to show the view from each vehicle, either as arc or to start with as a circle
// todo: add enemy ships that can fire missiles

import games.arcade.SpriteData.Companion.d
import games.arcade.vehicles.Asteroid
import games.arcade.vehicles.Ship
import ggi.AbstractGameState
import ggi.ExtendedAbstractGameState
import gui.GeomDrawable
import gui.XColor
import gui.XEllipse
import gui.XStyle
import math.Vec2d
import util.BoxMuller
import kotlin.math.PI
import kotlin.math.min
import kotlin.random.Random

interface ISprite {
    fun update(action: ShipAction, updater: Update)
    fun data(): SpriteData
    fun copy(): ISprite
}

data class SpriteData(
    val geom: GeomDrawable,
    val type: ObjectType,
    var s: Vec2d = Vec2d(),
    var v: Vec2d = Vec2d(),
    var rot: Double = 0.0,
    var rotRate: Double = 0.0,
    var ttl: Int = -1,
    var alive: Boolean = true
) {
    companion object {
        val d = Vec2d(0.0, -1.0)
        val bm = BoxMuller()
    }
}

class BasicSprite(var spriteData: SpriteData) : ISprite {
    override fun update(action: ShipAction, updater: Update) {
        // println("Updating Basic Sprite")
        updater.inplace(spriteData, action)
    }

    override fun data() = spriteData
    override fun copy() = BasicSprite(spriteData.copy())
}

class RockSprite(var sd: SpriteData, val sizeIndex: Int = 0) : ISprite {
    // constructor(s: Vec2d) : this (makeData(s))

    override fun data() = sd
    override fun copy(): ISprite = RockSprite(sd.copy(), sizeIndex)

    override fun update(action: ShipAction, updater: Update) {
        // println("Updating Basic Sprite")
        updater.inplace(sd, action)
    }

}

class SpriteShip(val sd: SpriteData, var wait: Int = 0) : ISprite {

    constructor(s: Vec2d) : this(makeData(s))

    override fun data() = sd
    override fun copy(): ISprite = SpriteShip(sd.copy(), wait)

    companion object {
        val lossFac = 0.97
        val thrustFac = 0.5
        val turn = 10 * PI / 180
        val muzzleVelocity = 10.0
        val coolDown = 10
        fun makeData(s: Vec2d) = SpriteData(
            Ship().getPoly(), ObjectType.Avatar,
            s, Vec2d()
        )
    }

    override fun update(action: ShipAction, updater: Update) {
        // println("Updating")
        updater.inplace(sd, action)

        // put the code here for now, but the aim is to move it later
        // into a general library of update code that can be applied
        // to various object types

        if (wait > 0) wait--
        if (action.fire && wait <= 0) {
            updater.fireMissile(sd, muzzleVelocity)
            wait = coolDown
        }
        with(sd) {
            if (action.thrust) v = v + (d.rotatedBy(rot) * thrustFac)
            v *= lossFac
            rot += action.turn * turn
//        geometry.dStyle.stroke = colliding
//        geometry.dStyle.fill = true
//        if (colliding) game?.shipDeath()
        }

    }
}

interface CollisionAction {
    fun act(a: ISprite, b: ISprite, game: SpriteGame?)
}

typealias Collider = (ISprite, ISprite, SpriteGame?) -> Unit


val rockHit: Collider = { a, b, g ->
    // if (a.data())
//    println("Colliding: " + a + " : " + g)

    if (g != null) g.scoreX += 100
    val nSpawn = 2
    if (g != null && a is RockSprite && a.sizeIndex < g.update.rockSizes.size - 1) {
        // println("Rock was hit at ${a.sd.s}")

        repeat (nSpawn) {
            val childRock = g.update.randRock(a.sizeIndex + 1, a.sd.s)
            g.addObject(childRock)
        }


//        g.addObject(RockSprite(a.sd.copy(alive = true, rot = a.sd.rot + PI / 2), sizeIndex = 1))
    }
}

// some updates wrap, so need to know the dimensions of the arena
class Update(var w: Double, var h: Double, var game: SpriteGame? = null) {
    val rand = Random
    val bm = BoxMuller()
    val rockSizes = arrayOf(0.06, 0.04, 0.02)
    val velocityFactor = 1.0

    // fun spawn

    fun spawnHeading(source: SpriteData, geom: GeomDrawable, type: ObjectType, speed: Double): SpriteData {
        with(source) {
            return SpriteData(geom, type, s, d.rotatedBy(rot) * speed)
        }
    }

    fun fireMissile(source: SpriteData, speed: Double) {
        val safe = game
        if (safe == null) {
            println("Null game in updater; not firing missile")
            return
        }
        val geom = XEllipse(Vec2d(), 10.0, 10.0)
        val missile = spawnHeading(source, geom, ObjectType.P1Missile, speed)
        missile.ttl = 50
        safe.addObject(BasicSprite(missile))
    }

    fun standard(sprite: SpriteData) =
        sprite.copy(
            s = wrap(sprite.s + sprite.v),
            rot = sprite.rot + sprite.rotRate
        )

    fun inplace(sprite: SpriteData, action: ShipAction? = null) {
        // move this default updater to the SpriteData class
        sprite.s = wrap(sprite.s + sprite.v)
        sprite.rot = sprite.rot + sprite.rotRate
        sprite.geom.centre = sprite.s
        sprite.geom.rotation = sprite.rot
        if (sprite.ttl > 0) {
            sprite.ttl--
            if (sprite.ttl <= 0) sprite.alive = false
        }
    }
// fun actionUpdate(sprite: Sprite) = Sprite(sprite.geom)

    fun wrap(s: Vec2d) = Vec2d((s.x + w) % w, (s.y + h) % h)

    fun randRock(sizeIndex: Int, s: Vec2d = randPosition()): RockSprite {
        val size = min(w, h)
        val rad = size * rockSizes[sizeIndex]
        val poly = Asteroid(16, rad, radRange = rad * 0.3).getPoly()
        val v = Vec2d(bm.nextGaussian(), bm.nextGaussian()) * velocityFactor
        val style = XStyle(lc = XColor.blue, fg = XColor.yellow, fill = true, stroke = true)
        val ellipse = XEllipse(s, rad * 2, rad * 2, dStyle = style)
        // return Rock(poly, s, v, sizeIndex)
        poly.dStyle = style
        // return Sprite(ellipse, ObjectType.AlienObject, s, v)
        val rotRate = 2 * bm.nextGaussian() * PI / 180
        return RockSprite(SpriteData(poly, ObjectType.AlienObject, s, v, rotRate = rotRate), sizeIndex = sizeIndex)
    }
    fun randPosition() = Vec2d(rand.nextDouble(w), rand.nextDouble(h))


}

class SampleSpriteGame(val w: Double = 640.0, val h: Double = 480.0) {
    val sprites = ArrayList<ISprite>()
    val rand = Random

    fun asteroids(): SpriteGame {
        val update = Update(w, h)
        createRocks(0, update)
        addShip()
        return SpriteGame(update, sprites)
    }

    private fun addShip() {
        sprites.add(SpriteShip(Vec2d(w / 2, h / 2)))
    }

    fun createRocks(sizeIndex: Int = 0, update: Update) {
        val rocks = ArrayList<ISprite>()
        val nRocks = 10
        while (rocks.size < nRocks) {
            val rock = update.randRock(sizeIndex)
            if (acceptRock(rock.data())) rocks.add(rock)
        }
        sprites.addAll(rocks)
    }

    fun acceptRock(sprite: SpriteData): Boolean {
        return (Vec2d(w / 2, h / 2).distanceTo(sprite.s) > min(w / 4, h / 4))
    }
}



class SpriteGame(
    val update: Update = Update(640.0, 480.0),
    var sprites: ArrayList<ISprite> = ArrayList(),
    var scoreX: Double = 0.0,
    var nTicksX: Int = 0
) : ExtendedAbstractGameState {

    companion object {
        internal var totalTicks = 0L

        // this should be defined elsewhere and then
        // just passed as an argument
        val typeMap = hashMapOf<ObjectType, List<ObjectType>>(
            ObjectType.Avatar to arrayListOf(ObjectType.AlienObject),
            ObjectType.P1Missile to arrayListOf(ObjectType.AlienObject)
        )

        val colliders = hashMapOf<ObjectType, Collider>(
            ObjectType.AlienObject to rockHit
        )
    }

    // val pending =

    override fun copy(): AbstractGameState {
        val listCopy = ArrayList<ISprite>()
        for (s in sprites) listCopy.add(s.copy())
        return SpriteGame(update, listCopy, scoreX, nTicksX)
    }

    override fun totalTicks() = totalTicks
    override fun resetTotalTicks() {
        totalTicks = 0
    }

    override fun randomInitialState(): AbstractGameState {
        TODO("Not yet implemented")
    }

    override fun next(actions: IntArray): AbstractGameState {
        return next(AsteroidsGame.actionAdapter.getAction(actions[0]))
    }

    fun next(action: ShipAction): AbstractGameState {
        // if (action == null) return this
        // make a sprite map
        val spriteMap = spriteMap(sprites)
        val safeList = ArrayList<ISprite>()
        safeList.addAll(sprites)
        sprites.clear()
        update.game = this
        for (sprite in safeList) {
            // update.inplace(sprite.data(), action)
            if (sprite.data().alive) {
                sprite.update(action, update)
                // now at this point do some collision detection!
                checkCollisions(sprite, typeMap, spriteMap)
            }
        }
        // println(sprites.size.toString() + " : " + action)
        AsteroidsGame.totalTicks++
        nTicksX++
        // println(sprites[0].s)
        for (s in safeList) if (s.data().alive) sprites.add(s)
        // sprites = safeList
        return this
    }

    private fun checkCollisions(
        sprite: ISprite,
        typeMap: HashMap<ObjectType, List<ObjectType>>,
        spriteMap: HashMap<ObjectType, ArrayList<ISprite>>
    ) {
        val colliderTypes = typeMap[sprite.data().type]
        if (colliderTypes == null) return
        for (collider in colliderTypes) {
            spriteMap[collider]?.forEach {
                // test by just killing them both if they collide
                if (collides(sprite, it)) {
                    // only allow one collision per object, so return after triggering the events
                    sprite.data().alive = false
                    it.data().alive = false
                    colliders[sprite.data().type]?.invoke(sprite, it, update.game)
                    colliders[it.data().type]?.invoke(it, sprite, update.game)
                    return
                }
            }
        }
    }

    private fun collides(a: ISprite, b: ISprite) =
        a.data().alive && b.data().alive &&
                a.data().s.distanceTo(b.data().s) <=
                a.data().geom.radius() + b.data().geom.radius()

    fun spriteMap(sprites: List<ISprite>): HashMap<ObjectType, ArrayList<ISprite>> {
        val map = HashMap<ObjectType, ArrayList<ISprite>>()
        for (s in sprites) {
            if (map[s.data().type] == null) map[s.data().type] = ArrayList()
            map[s.data().type]?.add(s)
        }
        return map
    }

    val actionMap = hashMapOf<Int, MoveAction>(
        0 to MoveAction.Neutral,
        1 to MoveAction.Left,
        2 to MoveAction.Right,
        3 to MoveAction.Fire,
        4 to MoveAction.Thrust
    )

    override fun nActions(): Int {
        return if (AsteroidsGame.useActionAdapter)
            AsteroidsGame.actionAdapter.actions.size
        else
            actionMap.size
    }


    override fun score(): Double {
        return scoreX
    }

    override fun isTerminal(): Boolean {
        return nTicksX > 0 && sprites.isEmpty()
    }

    override fun nTicks(): Int {
        return nTicksX
    }

    fun addObject(sprite: ISprite) {
        // println("Added " + sprite.data())
        sprites.add(sprite)
    }
}

