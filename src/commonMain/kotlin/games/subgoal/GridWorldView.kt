package games.subgoal

import gui.*
import gui.XColor.Companion.black
import gui.XColor.Companion.gray
import gui.XColor.Companion.green
import math.IntVec2d
import math.Vec2d
import kotlin.math.min


class GridWorldView(var gridWorld: SubGridWorld) : XApp {

    var count = 0
    override fun paint(xg: XGraphics) {

        // work out the cell size
        calcCellSize(xg)
        drawBackground(xg)
        draw(xg, gridWorld.a)

    }

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
                val iv = IntVec2d(i,j)
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

            }
        }
    }

    fun getColor(iv: IntVec2d) : XColor {
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

        val colors = hashMapOf<Char,XColor>(

        )

        // size of each block in pixels
        var cellSize = 20

        // var BG = 0
        var frame = XColor.blue

        // code for the background colour
        val BG = 7

    }
}
