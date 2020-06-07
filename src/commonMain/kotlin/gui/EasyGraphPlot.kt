package gui

import math.Vec2d
import util.StatSummary
import kotlin.random.Random

class EasyGraphPlot (var seed:Int = 1): XApp {

    val xp = XPalette()
    val rand = Random(seed)
    // val lines = ArrayList<Drawable>()

    override fun paint(xg: XGraphics) {
        // now draw them all
        randLines(xg).forEach { xg.draw(it) }
    }

    fun randLines(xg: XGraphics, rand:Random = Random(1L)) : List<Drawable> {
        val lines = ArrayList<XPoly>()
        // make a random line for each color
        val ss = StatSummary()
        for (i in 0 until xp.nColors) {
            val style = XStyle(fg = xp.colors[i], fill = false)
            // make a random set of points
            val points = ArrayList<Vec2d>()
            for (j in 0 until  xg.width().toInt()  step 20 ) {
                val y = rand.nextDouble(0.0, xg.height())
                ss.add(y)
                points.add( Vec2d(j.toDouble(), y ) )
            }
            val line = XPoly(points =  points, dStyle = style, closed = false)
            lines.add(line)
        }
        // println(xg.height())
        // println("Max = ${ss.max().toInt()}, min = ${ss.min().toInt()}")
        return lines
    }

    override fun handleMouseEvent(e: XMouseEvent) {
        // do nothing for now
    }

    override fun handleKeyEvent(e: XKeyEvent) {
        // do nothing for now
    }

}