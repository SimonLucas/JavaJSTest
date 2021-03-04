package plot

import gui.*
import math.Vec2d
import util.RangeMapper
import util.StatSummary
import kotlin.math.PI
import kotlin.random.Random


data class Borders(
    val left: Double = 0.1,
    val right: Double = 0.02,
    val top: Double = 0.02,
    val bottom: Double = 0.1,
    val inset: Double = 0.02, // the gap between edge of plot area and start of data plot
    var xDivs: Int = 6,
    var yDivs: Int = 6,
)

class GraphPlotter(
    val borders: Borders = Borders(),
    var xLabel: String = "Label X Axis",
    var yLabel: String = "Label Y Axis",
    val labelTStyle: TStyle = TStyle(fg = XColor.black),
    var drawGrid: Boolean = true,
    var lineWidth:Double  = 3.0,
    var seed: Int = 1,
) : XApp {

    val xp = XPalette(50, 0.2)
    val rand = Random(seed)


    // val lines = ArrayList<Drawable>()

    override fun paint(xg: XGraphics) {
        drawPlotAreaBackground(xg)
        drawXLabel(xg)
        drawYLabel(xg)
        drawGrid(xg)
        dataLines(xg, data).forEach { xg.draw(it) }
    }

    private fun drawGrid(xg: XGraphics) {
        with(borders) {
            val xDivs = getDivisions(
                borders.xDivs,
                xg.width() * (borders.left + borders.inset),
                xg.width() * (1.0 - (left + right + 2 * inset))
            )
            val yDivs = getDivisions(
                borders.xDivs,
                xg.height() * (borders.top + borders.inset),
                xg.height() * (1.0 - (top + bottom + 2 * inset))
            )
            val x1 = xg.width() * left
            val x2 = xg.width() * (1.0 - (right))
            val y1 = xg.height() * top
            val y2 = xg.height() * (1.0 - (bottom))
            val gridStyle = XStyle(lc = XColor.gray)
            for (x in xDivs) {
                xg.draw(XLine(Vec2d(x, y1), Vec2d(x, y2), gridStyle))
            }
            for (y in yDivs) {
                xg.draw(XLine(Vec2d(x1, y), Vec2d(x2, y), gridStyle))
            }
        }
    }

    private fun drawPlotAreaBackground(xg: XGraphics) {
        val xRect = getPlotRect(xg)
        xRect.dStyle = XStyle(fg = XColor.white, bg = XColor.blue, lc = XColor.black, stroke = true)
        xg.draw(xRect)
    }

    fun getPlotRect(xg: XGraphics): XRect {
        with(borders) {
            val plotWidth = xg.width() * (1.0 - (left + right))
            val plotHeight = xg.height() * (1.0 - (top + bottom))
            val plotCenter = Vec2d(xg.width() * left + plotWidth / 2, xg.height() * top + plotHeight / 2)
            return XRect(plotCenter, plotWidth, plotHeight)
        }
    }

    fun getDataRect(xg: XGraphics): XRect {
        with(borders) {
            val plotWidth = xg.width() * (1.0 - (left + right + 2 * inset))
            val plotHeight = xg.height() * (1.0 - (top + bottom + 2 * inset))
            val plotCenter = Vec2d(xg.width() * left + plotWidth / 2, xg.height() * top + plotHeight / 2)
            return XRect(plotCenter, plotWidth, plotHeight)
        }
    }

    private fun getDivisions(n: Int, start: Double, span: Double): ArrayList<Double> {
        val divs = ArrayList<Double>()
        val step = span / (n - 1)
        repeat(n) {
            divs.add(start + step * it)
        }
        return divs
    }

    fun drawXLabel(xg: XGraphics) {
        val centre = Vec2d(
            xg.centre().x,
            xg.height() * (1.0 - borders.bottom / 2)
        )
        xg.draw(XText(xLabel, centre, labelTStyle))
    }

    fun drawYLabel(xg: XGraphics) {
        val centre = Vec2d(
            xg.width() * borders.left / 2,
            xg.centre().y,
        )
        xg.draw(XText(yLabel, centre, labelTStyle, rotation = 3 * PI / 2))
    }

    fun dataLines(xg: XGraphics, data: List<DoubleArray>?): List<Drawable> {
        val lines = ArrayList<XPoly>()
        if (data == null) return lines
        // make a random line for each color
        val ss = StatSummary("Score Data")
        // all the arrays are empty if maxLen is null
        for (a in data) ss.add(a.asList())
//        val ssy = StatSummary("Y")
//        val ssx = StatSummary("X")

        for (i in 0 until data.size) {
            val style = XStyle(lc = xp.getColor(i), fill = false, lineWidth = lineWidth)
            // make a random set of points
            val points = ArrayList<Vec2d>()
            val da = data[i]
            with (borders) {
                val xMap = RangeMapper(0.0, da.size - 1.0,
                    xg.width() * (left+inset),
                    xg.width() * (1.0 - (right + inset)) )
                val yMap = RangeMapper(ss.min(), ss.max(),
                    xg.height() * (1.0 - (bottom+inset)),
                    xg.height() * (top + inset))
//                println(xMap)
//                println(yMap)
                for (j in 0 until da.size) {
                    val p = Vec2d(xMap.f(j.toDouble()), yMap.f(da[j]))
                    points.add(p)
//                    ssx.add(p.x)
//                    ssy.add(p.y)
                }
            }
            val line = XPoly(points = points, dStyle = style, closed = false)
            lines.add(line)
        }
        return lines
    }

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