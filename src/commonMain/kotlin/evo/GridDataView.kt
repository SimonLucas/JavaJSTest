package evo

import gui.*
import math.IntVec2d
import math.Vec2d
import kotlin.math.min


interface GridDataSource {
    fun nRows(): Int
    fun nCols(): Int
    fun nVisits(x:Int, y: Int): Int
    fun totalVisits(): Int
    fun maxVisits(): Int // max visits to any single cell
}

class GridDataView (val gd: GridDataSource) : XApp {

    var cellSize = 0.0
    val colors = arrayOf(XColor.yellow, XColor.gray)

    var message: String? = null

    override fun paint(xg: XGraphics) {
        calcCellSize(xg)
        drawBackground(xg)
        drawCells(xg)
        drawMessage(xg)
    }

    private fun drawMessage(xg: XGraphics) {
        val textStyle = TStyle(fg = XColor.black, size = cellSize)
        message?.let {
            xg.draw(XText(it, Vec2d(xg.width()/2, cellSize), textStyle))
        }
    }

    fun drawBackground(xg: XGraphics) {
        val rect = XRect(xg.centre(), xg.width(), xg.height())
        xg.draw(rect)
    }

    fun drawCells(xg: XGraphics) {
        val style = XStyle()
        val rect = XRect(xg.centre(), cellSize, cellSize, style)
        val max = gd.maxVisits()
        for (i in 0 until gd.nCols()) {
            for (j in 0 until gd.nRows()) {
                // println(a[i][j])
                // need to just set the rectangle to draw
                val iv = IntVec2d(i, j)
                val heat = gd.nVisits(i,j).toDouble() / max
                style.fg = XColorHeat().getColor(heat)
                style.stroke = true
                style.lc = XColor.red
                rect.centre = Vec2d((i + 0.5) * cellSize, (j + 0.5) * cellSize)
                xg.draw(rect)

                // overlay the number of visits
                val tStyle = TStyle(fg = XColor.black, size = cellSize/2)
                xg.draw(XText(gd.nVisits(i,j).toString(), rect.centre, tStyle))
            }
        }
    }

    fun getVec(iv: IntVec2d) = Vec2d((iv.x + 0.5) * cellSize, (iv.y + 0.5) * cellSize)

    fun calcCellSize(xg: XGraphics) {
        // work out the cell size as the minimum of the
        // row and col size fits
        val colSize = xg.width() / gd.nCols()
        val rowSize = xg.height() / gd.nRows()
        cellSize = min(colSize, rowSize)
    }

}