package games.arcade

import games.arcade.Sprite.Companion.d
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

data class Sprite(
    val geom: GeomDrawable,
    val type: ObjectType,
    var s: Vec2d = Vec2d(),
    var v: Vec2d = Vec2d(),
    var rot: Double = 0.0,
    var rotRate: Double = 0.0
) {
    companion object {
        val d = Vec2d(0.0, -1.0)
        val bm = BoxMuller()
    }
}

// some updates wrap, so need to know the dimensions of the arena
class Update(var w: Double, var h: Double) {

    // fun spawn

    fun spawnHeading(source: Sprite, geom: GeomDrawable, type: ObjectType, speed: Double): Sprite {
        with(source) {
            return Sprite(geom, type, s, d.rotatedBy(rot) * speed)
        }
    }

    fun standard(sprite: Sprite) =
        sprite.copy(
            s = wrap(sprite.s + sprite.v),
            rot = sprite.rot + sprite.rotRate
        )

    fun inplace(sprite: Sprite, action: ShipAction? = null) {
        sprite.s = wrap(sprite.s + sprite.v)
        sprite.rot = sprite.rot + sprite.rotRate
        sprite.geom.centre = sprite.s
        sprite.geom.rotation = sprite.rot
    }
// fun actionUpdate(sprite: Sprite) = Sprite(sprite.geom)

    fun wrap(s: Vec2d) = Vec2d((s.x + w) % w, (s.y + h) % h)
}

class SampleSpriteGame(val w: Double = 640.0, val h: Double = 480.0) {
    val bm = BoxMuller()
    val sprites = ArrayList<Sprite>()
    val rockSizes = arrayOf(0.06, 0.04, 0.02)
    val velocityFactor = 1.0
    val rand = Random

    fun asteroids(): SpriteGame {
        val update = Update(w, h)
        createRocks()
        addShip()
        return SpriteGame(update, sprites)
    }

    private fun addShip() {
        sprites.add(Sprite(Ship().getPoly(), ObjectType.Avatar,
            Vec2d(w/2, h/2), Vec2d()))

    }

    fun createRocks(sizeIndex: Int = 0) {
        val rocks = ArrayList<Sprite>()
        val nRocks = 10
        while (rocks.size < nRocks) {
            val rock = randRock(sizeIndex)
            if (acceptRock(rock)) rocks.add(rock)
        }
        sprites.addAll(rocks)
    }

    fun acceptRock(sprite: Sprite): Boolean {
        return (Vec2d(w / 2, h / 2).distanceTo(sprite.s) > min(w / 4, h / 4))
    }

    fun randRock(sizeIndex: Int, s: Vec2d = randPosition()): Sprite {
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
        return Sprite(poly, ObjectType.AlienObject, s, v, rotRate = rotRate)
    }

    fun randPosition() = Vec2d(rand.nextDouble(w), rand.nextDouble(h))

}

class SpriteGame(
    val update: Update = Update(640.0, 480.0),
    var sprites: ArrayList<Sprite> = ArrayList(),
    var score: Double = 0.0,
    var nTicks: Int = 0
) : ExtendedAbstractGameState {

    companion object {
        internal var totalTicks = 0L
    }

    override fun copy(): AbstractGameState {
        val listCopy = ArrayList<Sprite>()
        listCopy.addAll(sprites)
        return SpriteGame(update, listCopy, score, nTicks)
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
        val map = spriteMap(sprites)
        for (sprite in sprites) {
            update.inplace(sprite)
        }
        AsteroidsGame.totalTicks++
        nTicks++
        // println(sprites[0].s)
        return this
    }

    fun spriteMap(sprites: List<Sprite>): HashMap<ObjectType, ArrayList<Sprite>> {
        val map = HashMap<ObjectType, ArrayList<Sprite>>()
        for (s in sprites) {
            if (map[s.type] == null) map[s.type] = ArrayList()
            map[s.type]?.add(s)
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
        return score
    }

    override fun isTerminal(): Boolean {
        return nTicks > 0 && sprites.isEmpty()
    }

    override fun nTicks(): Int {
        return nTicks
    }
}

