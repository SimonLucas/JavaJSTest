package games.griddle

import games.griddle.ai.LetterGridModel
import games.griddle.ai.MCPlayer
import games.griddle.deck.StatDeck
import games.griddle.words.GridScan
import games.griddle.words.GridWord
import games.griddle.words.TrieDict

enum class GriddleState { Ready, GameOn, GameOver }

class GriddleGame (var control: GriddleControl = DefaultControl()){

    companion object {
        val vacant = ' '
    }

    var dict = TrieDict()
    val gridScan = GridScan()

    init {
        gridScan.dict = dict
        println("Control seed = " + control.getSeed())
    }

    var state: GriddleState = GriddleState.Ready
    val nCols = 5
    val nRows = 5

    var a = emptyGrid()
    var deck = StatDeck().getDeck(control.getSeed())
    var current = '?'
    var currentScore = 0
    var words: List<GridWord> = ArrayList<GridWord>()

    fun emptyGrid() = Array<CharArray>(nCols) { CharArray(nRows) { vacant } }

    fun grid() = a

    val enableAI = true

    fun nextState(cell: GridCell? = null) {
        when (state) {
            GriddleState.Ready -> {
                val letter = deck.next()
                if (letter != null) {
                    current = letter
                    state = GriddleState.GameOn
                } else {
                    deck = StatDeck().getDeck(control.getSeed())
                }
            }
            GriddleState.GameOn -> {
                // put the letter into the grid - need to decide where...
                // but only if the cell is empty

                var playedCell = cell
                if (cell == null && enableAI) {
                    // invoke the AI player
                    // playedCell =
                    val player = MCPlayer(dict)
                    playedCell = player.getAction(LetterGridModel(a), deck, current)
                }

                if (playedCell != null && a[playedCell.x][playedCell.y] == vacant) {
                    // a[cell.x][cell.y] = current
                    placeLetter(playedCell, current)
                    val letter = deck.next()
                    if (letter != null)
                        current = letter
                    else {
                        current = '?'
                        state = GriddleState.GameOver
                    }
                }
            }
            GriddleState.GameOver -> {
                // newGame()
                state = GriddleState.Ready
                a= emptyGrid()
                deck = StatDeck().getDeck(control.getSeed())
            }
        }
    }

    fun placeLetter(cell: GridCell, letter: Char) {
        a[cell.x][cell.y] = letter
        words = gridScan.findWords(a)
        currentScore = words.sumBy { it.score() }
//        println("Found ${words.size} words, score = $currentScore")
//        println("Words in dict = ${dict.nWords}")
//        println(LetterGridModel(a))
    }

    fun score(): Int = currentScore

    fun calcScore(grid: Array<CharArray>) : Int {
        return gridScan.findWords(grid).sumBy { it.score() }
    }

    fun newGame() {
        state = GriddleState.Ready
        a= emptyGrid()
        deck = StatDeck().getDeck(control.getSeed())
        a = emptyGrid()
        deck = StatDeck().getDeck(control.getSeed())
        current = '?'
        currentScore = 0
        println("Reset the game")
    }
}

data class GridCell(val x: Int, val y: Int)

