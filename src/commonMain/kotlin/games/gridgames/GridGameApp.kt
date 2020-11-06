package games.gridgames

import games.uti.LineGrid
import games.uti.LineTester
import gui.XApp
import gui.XGraphics
import gui.XMouseEvent
import gui.XMouseEventType
import math.IntVec2d

class GridGameApp : XApp {

    val n = 3
    var lineTester = LineTester()
    var lineGrid = LineGrid(n, n, lineTester)
    var gridGame = TicTacToe(lineGrid)

    var gridView = GridView(lineGrid)

    init {
        lineTester.addAllDirections(n)
        gridGame.next(IntVec2d(1,1))
        println(gridGame.lg.gridState())
        println(gridGame.lg.lineTester.lines.size)
        println(lineTester.lines.size)
    }

    override fun paint(xg: XGraphics) {
        gridView.draw(xg)
    }

    override fun handleMouseEvent(e: XMouseEvent) {
        println(e)
        if (e.t == XMouseEventType.Clicked) {
            val cell = gridView.getCell(e.s)
            if (cell != null) {
                gridGame.next(cell)
            }
        }
    }
}