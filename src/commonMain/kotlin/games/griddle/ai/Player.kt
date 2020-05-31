package games.griddle.ai

import games.griddle.GridCell
import games.griddle.GriddleGame
import games.griddle.GriddleGame.Companion.vacant
import games.griddle.deck.FastSampleDeck
import games.griddle.words.GridScan
import games.griddle.words.TrieDict
import util.StatSummary

class LetterGridModel (g: Array<CharArray>){

    val grid = Array<CharArray>(n()) { CharArray(n()) { GriddleGame.vacant } }
    init {
        for (i in 0 until n())
            for (j in 0 until n())
                grid[i][j] = g[i][j]
    }

    fun vacancies() : ArrayList<GridCell> {
        val va = ArrayList<GridCell>()
        for (i in 0 until n())
            for (j in 0 until n())
                if (grid[i][j] == vacant)
                    va.add(GridCell(i,j))
        return va
    }

    override fun toString(): String {
        val sb = StringBuilder()
        for (i in 0 until n()) {
            for (j in 0 until n())
                sb.append(grid[i][j])
            sb.append("\n")
        }
        return sb.toString()
    }


    fun isFull(): Boolean {
        TODO("Not yet implemented")
    }

    // n x n grid
    fun n(): Int = 5
}

interface Player {
    // this gets the action as an int
    // in the range 0 .. 24 for the available board places
    // ch is the current character to be placed
    fun getAction(model: LetterGridModel, deck: FastSampleDeck, toPlace: Char): GridCell
}

class MCPlayer(val dict: TrieDict) : Player {

    data class ScoredCell(val cell: GridCell, val score: Double)
    var sorted = ArrayList<ScoredCell>()

    fun swap(grid: Array<CharArray>, a: GridCell, b: GridCell) {
        val tmp = grid[a.x][a.y]
        grid[a.x][a.y] = grid[b.x][b.y]
        grid[b.x][b.y] = tmp
    }

    override fun getAction(model: LetterGridModel, deck: FastSampleDeck, toPlace: Char): GridCell {
        val scoreMap = HashMap<GridCell, StatSummary>()
        val vacancies = model.vacancies()

        vacancies.forEach { scoreMap[it] = StatSummary() }

        // now for each shuffle repeat the following
        val nShuffles = 1000
        // make a copy of the model and put the letter
        // to place in the first one


        var nScores = 0

        for (n in 0 until nShuffles) {
            val modelCopy = LetterGridModel(model.grid)
//        println(model)
//        println()
//        println(modelCopy)
//        println()
            val first = vacancies[0]
            modelCopy.grid[first.x][first.y] = toPlace

            // now shuffle the remainder of the deck
            // and deal them out to the other vacant cells
            val deckCopy = deck.deepCopy()
            deckCopy.shuffleRemainingCards()
            for (i in 1 until vacancies.size) {
                val v = vacancies[i]
                val next = deckCopy.next()
                if (next != null) {
                    modelCopy.grid[v.x][v.y] = next
                } else throw RuntimeException("Unexpected empty deck")
            }

            // now score each one after making a swap of the letter position

            val gridScan = GridScan()
            gridScan.dict = dict

            for (i in 0 until vacancies.size) {
                swap(modelCopy.grid, vacancies[0], vacancies[i])
                // score placing the letter at the ith vacancy
                // println("i = $i")
                // println(modelCopy)
                val score = gridScan.findWords(modelCopy.grid).sumBy { it.score() }
                nScores++
                // println(score)
                val ss = scoreMap[vacancies[i]]
                if (ss != null) ss.add(score)
                swap(modelCopy.grid, vacancies[0], vacancies[i])
                // println()
            }
        }
        // now sort them

        val scoredList = ArrayList<ScoredCell>()
        for ((k, v) in scoreMap) {
            scoredList.add(ScoredCell(k, v.mean()))
        }

        val sorted = scoredList.sortedByDescending{ it.score }
        sorted.forEach { println("${it.cell}\t ${it.score}") }

        println("$nScores calls to score function")
        return sorted[0].cell
    }
}



class FastMCPlayer {
    // return the cell to place the

    var nSims = 100
//    companion object {
//        val nSims = 1000
//    }
    fun getAction(game: GriddleGame) : GridCell {
        return GridCell(0, 0)
    }

    fun playout(game: GriddleGame, cell: GridCell, letter: Char) : StatSummary {
        val ss = StatSummary()
        for (i in 0 until nSims) {
            // make a deep copy of the deck, and of the grid
            val deck = game.deck.deepCopy()
            val grid = LetterGridModel(game.a)
            deck.shuffleRemainingCards()
            // now play out the shuffled cards and return the grid score
            // for ()

        }
        return ss
    }
}

