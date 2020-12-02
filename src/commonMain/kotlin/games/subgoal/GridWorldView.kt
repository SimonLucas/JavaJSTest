package games.subgoal

import gui.*
import gui.XColor.Companion.black
import gui.XColor.Companion.blue
import gui.XColor.Companion.gray
import gui.XColor.Companion.green
import gui.XColor.Companion.magenta
import gui.XColor.Companion.red
import math.IntVec2d
import math.Vec2d
import kotlin.math.min

//


class GridWorldView(var gridWorld: SubGridWorld, var updater: Updater? = null) : XApp {

    var graph: Graph? = null
    var count = 0
    override fun paint(xg: XGraphics) {
        updater?.invoke()
        // work out the cell size
        calcCellSize(xg)
        drawBackground(xg)
        draw(xg, gridWorld.a)
        drawPaths(xg, paths)
        graph?.let{ drawGraph(xg, it)}
    }

    var paths = ArrayList<Path>()
    var boldPaths = ArrayList<Path>()

    fun drawPaths(xg: XGraphics, paths: ArrayList<Path>, bold: Boolean = false) {
        val xs = XStyle(fill = false)
        val colors = XPalette(seed = 2L, nColors = paths.size, min = 0.0, max = 0.5)
        var ix = 0
        for (path in paths) {
            xs.lc = colors.getColor(ix++)
            xs.lc.a = if (bold) 1.0f else 0.5f

            val points = ArrayList<Vec2d>()
            path.forEach { points.add(getVec(it)) }
            val xp = XPoly(centre = Vec2d(), points = points, dStyle = xs, closed = false)
            xg.draw(xp)
        }
    }

    fun drawMainPaths(xg: XGraphics, paths: ArrayList<Path>) {
        val xs = XStyle(fill = false, lineWidth = 5.0, lc = blue)
        var ix = 0
        for (path in paths) {
            val points = ArrayList<Vec2d>()
            path.forEach { points.add(getVec(it)) }
            val xp = XPoly(centre = Vec2d(), points = points, dStyle = xs, closed = false)
            xg.draw(xp)
        }
    }

    fun drawGraph(xg: XGraphics, graph: Graph, drawPaths: Boolean = true) {
        val xs = XStyle(fill = false)
        // val colors = XPalette(seed = 20L, nColors = paths.size, min = 0.2, max = 0.4)
        var ix = 0
        val mainPaths = ArrayList<Path>()
        for (node in graph.g.keys) {
            for (arc in graph.outArcs(node)) {
                val from = node as IntVec2d
                val to = arc.key as IntVec2d
                xs.lc = magenta
                xs.lc.a = 1.0f
                val line = XLine(getVec(from), getVec(to), xs)
                xg.draw(line)
                arc.value.path?.let { mainPaths.add(it) }
            }
        }
        // println(mainPaths)
        drawMainPaths(xg, mainPaths)
    }

    fun getVec(iv: IntVec2d) = Vec2d((iv.x + 0.5) * cellSize, (iv.y + 0.5) * cellSize)

    fun getVec(x: Double, y: Double) = Vec2d((x + 0.5) * cellSize, (y + 0.5) * cellSize)

    fun calcCellSize(xg: XGraphics) {
        // val
        centre = Vec2d(xg.width() / 2, xg.height() / 2)

        // work out the cell size as the minimum of the
        // row and col size fits
        val colSize = xg.width() / gridWorld.nCols
        val rowSize = xg.height() / gridWorld.nRows
        cellSize = min(colSize, rowSize)
    }

    override fun handleMouseEvent(e: XMouseEvent) {
    }


    override fun handleKeyEvent(e: XKeyEvent) {
    }

    var a: Array<IntArray>? = null
    var w: Double = 1.0
    var h: Double = 1.0
    var cellSize = 20.0
    var centre = Vec2d()

    fun setData(a: Array<IntArray>?) {
        this.a = a
    }

    fun drawBackground(xg: XGraphics) {
        val style = XStyle()
        val rect = XRect(centre, xg.width(), xg.height(), style)
        style.fg = black
        xg.draw(rect)
    }

    fun draw(xg: XGraphics, a: Array<CharArray>?) {
        val style = XStyle()
        val rect = XRect(centre, cellSize, cellSize, style)
        for (i in 0 until gridWorld.nCols) {
            for (j in 0 until gridWorld.nRows) {
                // println(a[i][j])
                // need to just set the rectangle to draw
                val iv = IntVec2d(i, j)
                style.fg = getColor(iv)
                style.stroke = true
                style.lineWidth = 1.0
                style.lc = gray
                rect.centre = Vec2d((i + 0.5) * cellSize, (j + 0.5) * cellSize)
                xg.draw(rect)

                // now overlay subgoals of needed
                if (gridWorld.atSubgoal(iv)) {
                    val ds = XStyle(fg = green)
                    val disc = XEllipse(rect.centre, cellSize, cellSize, ds)
                    xg.draw(disc)
                }

                if (gridWorld.atGoal(iv)) {
                    val ds = XStyle(fg = blue)
                    val points = PolyUtil().makePolygon(3, cellSize/2)
                    xg.draw(XPoly(rect.centre, points, ds))
                }

                if (gridWorld.startPosition() == iv) {
                    val ds = XStyle(fg = red)
                    val points = PolyUtil().makePolygon(4, cellSize/2)
                    xg.draw(XPoly(rect.centre, points, ds, rotation = 0.0))
                }

            }
        }
    }

    fun getColor(iv: IntVec2d): XColor {
        if (gridWorld.navigable(iv))
            return XColor.yellow
        else
            return XColor.black
    }

    companion object {
//        var colors = arrayOf(
//            XColor.green, XColor.blue, XColor.red,
//            XColor.yellow, XColor.magenta, XColor.pink, XColor.cyan, XColor.black, XColor.gray
//        )

        val colors = hashMapOf<Char, XColor>(

        )

        // size of each block in pixels
        var cellSize = 20

        // var BG = 0
        var frame = XColor.blue

        // code for the background colour
        val BG = 7

    }
}
