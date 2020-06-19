package games.arcade

import games.arcade.vehicles.Asteroid
import gui.*
import math.Vec2d
import util.BoxMuller
import kotlin.math.PI
import kotlin.math.min
import kotlin.random.Random

enum class MoveAction {Neutral, Left, Right, Up, Down, Fire, Jump}

// not sure where
enum class ObjectType {Avatar, P1Missile, AlienMissile, AlienObject}



open class GameObject (
    val poly: XPoly,
    var s: Vec2d = Vec2d(),
    var v: Vec2d = Vec2d(),
    var rot: Double = 0.0,
    var rotRate: Double = PI / 180,
    var alive: Boolean = true,
    var age: Int = 0

) {
    fun update(w: Double, h: Double) {
        s += v
        s = wrap(s,w,h)
        rot += rotRate
        poly.centre = s
        poly.rotation = rot
        age++
    }

    fun wrap(v: Vec2d, w: Double, h: Double) =
        Vec2d( (v.x + w) % w, (v.y + h) % h)
}

class ArcadeTestApp : XApp {
    var mp: Vec2d? = null
    val rockSize = 0.05
    val velocityFactor = 1.0

    val gobs = ArrayList<GameObject>()
    val n = 10
    val rand = Random
    init {
    }

    fun createRocks(w: Double, h: Double) {
        val bm = BoxMuller()
        val size = min(w,h)
        for (i in 0 until n) {
            val poly = Asteroid(8, size * rockSize).getPoly()
            val s = Vec2d(rand.nextDouble(w), rand.nextDouble(h))
            val v = Vec2d(bm.nextGaussian(), bm.nextGaussian()) * velocityFactor
            gobs.add(GameObject(poly,s,v))
        }
    }

    override fun paint(xg: XGraphics) {
        if (gobs.isEmpty()) createRocks(xg.width(), xg.height())
        val bgstyle = XStyle(fg= XColor.black)
        xg.draw(XRect(xg.centre(), xg.width(), xg.height(), bgstyle))
        gobs.forEach { it.update(xg.width(), xg.height()) }
        gobs.forEach { xg.draw(it.poly) }

        // paint them

    }

    override fun handleMouseEvent(e: XMouseEvent) {
        // println(e)
        mp = e.s
    }

    override fun handleKeyEvent(e: XKeyEvent) {
    }

}

class GameLoop {

    var gameObjects: Map<ObjectType,List<GameObject>> = HashMap()

    var canCollide: Map<ObjectType, List<ObjectType>> = HashMap()

    fun update() {
        // the update loop

    }

}