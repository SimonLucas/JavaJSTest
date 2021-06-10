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


class TetrisTransitionModelTest (
    var control: GridDemoControl = GridDemoControl()
        ){

    fun runModel(nRolls: Int = 1000, seqLength: Int = 1000): TransitionModel {

        val filters = arrayListOf<StateFilter>(
            TetrisHeightFilter(),
            TetrisShapeFilter(),
            TetrisWallFilter(),
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

