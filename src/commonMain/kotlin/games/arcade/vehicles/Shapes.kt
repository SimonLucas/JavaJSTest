package games.arcade.vehicles

import gui.XColor
import gui.XPoly
import gui.XStyle
import math.Vec2d
import kotlin.math.PI
import kotlin.math.cos
import kotlin.math.sin
import kotlin.random.Random

interface Shape {
    fun getPoly() : XPoly
}

class Asteroid (val n: Int, val rad: Double,
                val radRange: Double  = rad * 0.7,
                val angRange: Double = 0.2 * PI / n,
                val rand: Random = Random): Shape {
    override fun getPoly(): XPoly {

        val points = ArrayList<Vec2d>()
        val angleStep = 2 * PI / n
        for (i in 0 until n) {
            val theta = i * angleStep + rand.nextDouble(-angRange, angRange)
            val r = rad + rand.nextDouble(-radRange, radRange)
            points.add(Vec2d(r * cos(theta), r * sin(theta)))
        }

        val style = XStyle(stroke = true, fill=false, fg = XColor.red, lc = XColor.green,
            bg = XColor.cyan, lineWidth = 3.0)
        return XPoly(Vec2d(), points, dStyle = style)
    }

}

//// define the shape of the ship
//static int[] xp = {-2, 0, 2, 0};
//static int[] yp = {2, -2, 2, 0};
//
//// this is the thrust poly that will be drawn when the ship
//// is thrusting
//static int[] xpThrust = {-2, 0, 2, 0};
//static int[] ypThrust = {2, 3, 2, 0};
//// public static double scale = 15;
//

class Ship (
    val l: Double = 20.0
) : Shape {
    override fun getPoly(): XPoly {
        val points = arrayListOf<Vec2d>(
            Vec2d(-l,l),
            Vec2d(0.0,-l),
            Vec2d(l,l),
            Vec2d(0.0,0.0)
        )
        val style = XStyle(stroke = false, fill=true, fg = XColor.white, lc = XColor.white,
            bg = XColor.cyan, lineWidth = 2.0)
        return XPoly(Vec2d(), points, dStyle = style)
    }

}
