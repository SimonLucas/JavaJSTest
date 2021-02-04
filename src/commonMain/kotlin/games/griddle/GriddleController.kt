package games.griddle

import games.griddle.ai.ScoredCell
import gui.*

interface GriddleControl {
    fun getSeed(): Long
}

class DefaultControl : GriddleControl {
    override fun getSeed() = -1L
}

class GriddleController (var control: GriddleControl = DefaultControl()): XApp {

    var game = GriddleGame(control)
    var gv = GriddleView(game.nCols, game.nRows)
    var xgTemp: XGraphics? = null

    init {
        testData()
    }

    fun loadWords(words: List<String>) {
        game.dict.addWords(words)
    }

    private fun testData() {
        gv.setGrid(game.grid())
    }

    override fun paint(xg: XGraphics) {
        gv.paint(xg)
        // keep this for later in the event handling methods
        xgTemp = xg
    }

    override fun handleMouseEvent(e: XMouseEvent) {
        if (e.t == XMouseEventType.Down) {
            // println(e.s)
            val cell = gv.getGridCell(e.s)
            game.nextState(cell)
            gv.setData(game.grid(), game.current, game.score(), game.scored)

            val xg = xgTemp
            if (xg != null) {
                gv.paint(xg)
                // println("Immediate repaint: ${game.current}" )
            }
            // println(game.current)
        }
    }

    override fun handleKeyEvent(e: XKeyEvent) {
    }

    fun newGame() {
        game.newGame()
        gv.setData(game.grid(), game.current, game.score())
        val xg = xgTemp
        if (xg != null) {
            gv.paint(xg)
            // println("Immediate repaint: ${game.current}" )
        }
    }


}

