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