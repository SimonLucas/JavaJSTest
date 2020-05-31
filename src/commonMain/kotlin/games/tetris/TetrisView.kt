package games.tetris

import gui.*
import gui.XColor.Companion.black
import gui.XColor.Companion.gray
import math.Vec2d
import kotlin.math.min


class TetrisView(val nCols: Int, val nRows: Int) : XApp {

    var count = 0
    override fun paint(xg: XGraphics) {

        // work out the cell size
        calcCellSize(xg)
        drawBackground(xg)
        draw(xg, a)
        drawGhostShape(xg, ghostShape)
        drawShape(xg, shape)

        // println(cellSize)
    }

    fun calcCellSize(xg: XGraphics) {
        // val
        centre = Vec2d(xg.width() / 2, xg.height() / 2)

        // work out the cell size as the minimum of the
        // row and col size fits
        val colSize = xg.width() / nCols
        val rowSize = xg.height() / nRows
        cellSize = min(colSize, rowSize)
    }

    override fun handleMouseEvent(e: XMouseEvent) {
    }

    override fun handleKeyEvent(e: XKeyEvent) {
    }

    var topVisibleRow = 0
    var shape: TetronSprite? = null
    var ghostShape: TetronSprite? = null
    var a: Array<IntArray>? = null
    var w: Double = 1.0
    var h: Double = 1.0
    var cellSize = 20.0
    var centre = Vec2d()

    fun setData(a: Array<IntArray>?, shape: TetronSprite?, ghostShape: TetronSprite?) {
        this.a = a
        this.shape = shape
        this.ghostShape = ghostShape
    }

    fun drawBackground(xg: XGraphics) {
        val style = XStyle()
        val rect = XRect(centre, xg.width(), xg.height(), style)
        style.fg = black
        xg.draw(rect)
    }

    fun draw(xg: XGraphics, a: Array<IntArray>?) {
        if (a == null) return

        val style = XStyle()
        val rect = XRect(centre, cellSize, cellSize, style)
        for (i in 0 until nCols) {
            for (j in topVisibleRow until nRows) {
                // println(a[i][j])
                // need to just set the rectangle to draw
                style.fg = colors[a[i][j]]
                style.stroke = true
                style.lc = gray
                rect.centre = Vec2d((i + 0.5) * cellSize, (j + 0.5) * cellSize)
                xg.draw(rect)
                if (a[i][j] == BG) {
                    style.stroke = true
                    style.lc = XColor.blue
                    style.fg = colors[BG]
                    xg.draw(rect)
                }
            }
        }
    }

    fun drawShape(xg: XGraphics, ts: TetronSprite?) {
        if (ts == null) return
        val style = XStyle()
        val rect = XRect(centre, cellSize, cellSize, style)
        style.fg = colors[ts.color]
        style.lc = black.copy(a=0.5f)
        style.stroke = true
        style.lineWidth = 2.0
        for (cell in ts.getCells()) {
            rect.centre = Vec2d((cell.x + 0.5) * cellSize, (cell.y + 0.5) * cellSize)
            xg.draw(rect)
        }
    }

    fun drawGhostShape(xg: XGraphics, ts: TetronSprite?) {
        if (ts == null) return
        val style = XStyle()
        val rect = XRect(centre, cellSize, cellSize, style)
        style.fg = XColor.gray
        style.lc = XColor.white
        style.stroke = true
        for (cell in ts.getCells()) {
            rect.centre = Vec2d((cell.x + 0.5) * cellSize, (cell.y + 0.5) * cellSize)
            xg.draw(rect)
        }
    }

    companion object {
        var colors = arrayOf(
            XColor.green, XColor.blue, XColor.red,
            XColor.yellow, XColor.magenta, XColor.pink, XColor.cyan, XColor.black, XColor.gray
        )

        // size of each block in pixels
        var cellSize = 20

        // var BG = 0
        var frame = XColor.blue

        // code for the background colour
        val BG = 7

    }
}
