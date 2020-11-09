package games.gridgames

import games.uti.GridState
import games.uti.LineGrid
import games.uti.LineTester
import ggi.AbstractGameStateMulti
import ggi.ExtendedAbstractGameStateMulti
import math.IntVec2d

class GridGame {

}

class TicTacToe (var lg: LineGrid, var toMoveVar: Int = 0): ExtendedAbstractGameStateMulti {
    companion object {
        var totTicks = 0

        fun getGame(n: Int = 3) : TicTacToe {
            var lineTester = LineTester()
            lineTester.addAllDirections(n)
            var lineGrid = LineGrid(n, n, lineTester)
            var gridGame = TicTacToe(lineGrid)
            return gridGame
        }
    }
    var nTic = 0

    override fun copy(): AbstractGameStateMulti {
        val gridCopy: LineGrid = lg.copy()
        return TicTacToe(gridCopy, toMoveVar)
    }

    override fun next(actions: IntArray): AbstractGameStateMulti {
        try {
            next(lg.vacancies()[actions[0]])
        } catch (e: Exception) {
            println(e)
        }
        return this
    }

    fun next(placeAt: IntVec2d) {
        // println("Trying to place at $placeAt, toMove = $toMove")
        if (lg.isVacant(placeAt)) {
            lg.play(placeAt, toMoveVar)
            toMoveVar = 1 - toMoveVar
            nTic++
            totTicks++
            // println("State = " + lg.gridState())
        }
    }

    override fun nActions(playerId: Int): Int {
        return lg.nVacant()
    }

    override fun score(playerId: Int): Double {
        val state = lg.gridState()
        if (state == GridState.Win1) return 1.0
        if (state == GridState.Win2) return -1.0
        return 0.0
    }

    override fun isTerminal(playerId: Int): Boolean {
        return lg.nVacant() == 0
    }

    override fun nTicks() = nTic

    override fun toMove() = toMoveVar

    override fun totalTicks() = totTicks.toLong()

    fun reset() {
        nTic = 0
        toMoveVar = 0
        lg.reset()
    }

    override fun randomInitialState(): AbstractGameStateMulti {
        reset()
        return this
    }
}
