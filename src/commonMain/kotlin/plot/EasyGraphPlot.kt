package plot

import gui.*
import math.Vec2d
import util.StatSummary
import kotlin.random.Random

class EasyGraphPlot (var seed:Int = 1): XApp {

    val xp = XPalette(50, 0.2)
    val rand = Random(seed)
    // val lines = ArrayList<Drawable>()

    override fun paint(xg: XGraphics) {
        dataLines(xg, data).forEach { xg.draw(it) }
    }

    fun dataLines(xg: XGraphics, data: List<DoubleArray>? ) : List<Drawable> {
        val lines = ArrayList<XPoly>()
        if (data == null) return lines
        // make a random line for each color
        val ss = StatSummary("Score Data")
        val maxLen = data.map{it.size}.max()
        // all the arrays are empty if maxLen is null
        if (maxLen == null) return lines


        for (a in data) ss.add(a.asList())
        ss.add(0)
        ss.add(5250)

        val ssy = StatSummary("Y")
        val ssx = StatSummary("X")

        for (i in 0 until data.size) {
            val style = XStyle(lc = xp.getColor(i), fill = false)
            // make a random set of points
            val points = ArrayList<Vec2d>()
            val xStep = xg.width() / maxLen
            val da = data[i]
            for (j in 0 until da.size) {
                val p = Vec2d(j * xStep, xg.height() * (1.0 - yVal(da[j], ss) ) )
                points.add( p )
                ssx.add(p.x)
                ssy.add(p.y)
            }
            val line = XPoly(points =  points, dStyle = style, closed = false)
            lines.add(line)
        }
//        println("Returning nLines: " + lines.size)
//        println(ssx)
//        println(ssy)
//        println(ss)
//        println(data[0].asList())
        return lines
    }

    fun yVal(y: Double, ss: StatSummary) : Double =
        (0.01 + y - ss.min()) / (1.0 + ss.max() - ss.min())

    override fun handleMouseEvent(e: XMouseEvent) {
        // do nothing for now
    }

    override fun handleKeyEvent(e: XKeyEvent) {
        // do nothing for now
    }

    private var data: List<DoubleArray>? = null
    fun setData(data: List<DoubleArray>?) {
        this.data = data
    }

}