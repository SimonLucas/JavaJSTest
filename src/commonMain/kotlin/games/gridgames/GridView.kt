package games.gridgames

import games.uti.CellState
import games.uti.LineGrid
import games.uti.LineTester
import gui.*
import math.IntVec2d
import math.Vec2d
import kotlin.math.min

class GridView (var lg: LineGrid = LineGrid(3, 3, LineTester()),
                var gs: GridStyle = GridStyle()) {

    fun getCell(s: Vec2d) : IntVec2d? {
        // take the centre offset, divide by the most recent cell size
        if (cellSize <= 0.0) return null
        // grid cell relative to top left corner
        val leftX = centre.x - cellSize * lg.w * 0.5
        val topY = centre.y - cellSize * lg.h * 0.5
        val x = (s.x - leftX) / cellSize
        val y = (s.y - topY) / cellSize
        if (x < 0.0 || y < 0.0 || x >= lg.w || y >= lg.h) return null
        val cell = IntVec2d(x.toInt(), y.toInt())
        println(cell)
        return cell
    }

    var cellSize = 0.0
    var centre = Vec2d()

    fun draw(xg : XGraphics) {
        // calculate geometry
        val ratio = 1.0 - (2.0 * gs.boardMargin)
        val xCell = xg.width() * ratio / lg.w
        val yCell = xg.height() * ratio / lg.h

        cellSize = min(xCell, yCell)
        centre = xg.centre()

        // draw the back ground, then the cells

        xg.draw(XRect(xg.centre(), xg.width(), xg.height(), XStyle(fg = gs.bg, fill = true,
            stroke = false)) )

        // now draw some other stuff ...

        for (x in 0 until lg.w) {
            for (y in 0 until lg.h) {
                val gx = xg.centre().x + (x - (lg.w - 1) * 0.5) * cellSize
                val gy = xg.centre().y + (y - (lg.h - 1) * 0.5) * cellSize
                val cellStyle = XStyle(lc = gs.cellBorderColor, fg = gs.boardCell, lineWidth = gs.cellBorder * cellSize)
                val cell = XRect(Vec2d(gx, gy), cellSize, cellSize, cellStyle)
                xg.draw(cell)

                // draw the letter if not empty

                if (lg.grid[x][y] != CellState.Empty) {
                    val str = if (lg.grid[x][y] == CellState.P1) "X" else "O"
                    val tStyle = TStyle(size = cellSize, fg = gs.tc)
                    val text = XText(str, Vec2d(gx, gy), tStyle, XStyle())
                    xg.draw(text)
                    // println("Drawing $text")
                } else {
                    // println("$x, $y is empty")
                }
            }
        }
    }
}

data class GridStyle (
    var cellBorder: Double = 0.08,
    var boardMargin: Double = 0.1,
    var bg: XColor = XColor.black,
    var tc: XColor = XColor.white,
    var boardCell: XColor = XColor.blue,
    var cellBorderColor: XColor = XColor.gray
)
