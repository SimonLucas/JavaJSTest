package test.subgoal

import games.subgoal.SubGridState
import games.tetris.ColHeightDiff
import games.tetris.TetrisGame
// import games.tetris.TetrisShapeFilter
import games.tetris.TetronSprite
import ggi.AbstractGameState

fun main() {
    TetrisTransitionModelTest().runModel().report()
}


class TetrisTransitionModelTest {

    fun runModel(nRolls: Int = 10, seqLength: Int = 100): TransitionModel {

        var filters = arrayListOf<StateFilter>(
            TetrisShapeFilter(),
            TetrisHeightFilter(),
            // TetrisWallFilter(),
        )

        val test = TransitionModel(filters)
        val state = TetrisGame()

        repeat(nRolls) {
            test.gatherStats(state.copy(), seqLength)
            println("Iteration: ${it + 1}")
        }
        return test
    }
}

