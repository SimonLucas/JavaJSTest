package evo

import gui.*
import math.IntVec2d
import math.Vec2d
import kotlin.math.min

class SimpleGridView (val nCols: Int, val nRows: Int) {

    var a = Array(nCols) { IntArray(nRows) }
    var cellSize = 0.0
    val colors = arrayOf(XColor.yellow, XColor.gray)

    var message: String? = null

    fun setData(list: ArrayList<Int>) {
        var ix = 0
        for (y in 0 until nRows) {
            for (x in 0 until nCols) {
                a[x][y] = list[ix++]
            }
        }
    }

    fun draw(xg: XGraphics) {
        calcCellSize(xg)
        drawBackground(xg)
        drawCells(xg)
        drawPath(xg)
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
        for (i in 0 until nCols) {
            for (j in 0 until nRows) {
                // println(a[i][j])
                // need to just set the rectangle to draw
                val iv = IntVec2d(i, j)
                style.fg = colors[a[i][j]]
                style.stroke = true
                style.lineWidth = if (a[i][j] == 1) 3.0 else 1.0
                style.lc = XColor.red
                // only stroke the obstacles - as if they are boxes
                style.stroke = a[i][j] == 0
                rect.centre = Vec2d((i + 0.5) * cellSize, (j + 0.5) * cellSize)
                xg.draw(rect)
            }
        }
    }


    val pathStyle = XStyle(fill = false, lineWidth = 5.0, lc = XColor.blue)

    fun drawPath(xg: XGraphics) {
        bestPath?.let {
            val vecList = ArrayList<Vec2d>()
            it.forEach { x-> vecList.add(getVec(x)) }
            val polyLine = XPoly(Vec2d(), vecList, pathStyle, closed = false)
            xg.draw(polyLine)
        }
    }

    fun getVec(iv: IntVec2d) = Vec2d((iv.x + 0.5) * cellSize, (iv.y + 0.5) * cellSize)


    fun calcCellSize(xg: XGraphics) {
        // work out the cell size as the minimum of the
        // row and col size fits
        val colSize = xg.width() / nCols
        val rowSize = xg.height() / nRows
        cellSize = min(colSize, rowSize)
    }

    var bestPath: ArrayList<IntVec2d>? = null
    fun setPath(bestPath: ArrayList<IntVec2d>?) {
        this.bestPath = bestPath
    }

}