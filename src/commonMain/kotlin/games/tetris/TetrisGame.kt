package games.tetris

import games.tetris.TetrisModel.Companion.dropSkip
// import games.tetris.TetrisGame.Actions
import games.tetris.TetrisModel.Companion.gameOverPenalty
import ggi.AbstractGameState
import ggi.ExtendedAbstractGameState

// todo: Implement sub-goal MCTS version of Tetris?

// todo: Find bug that causes non-determinism - try it without the dropdown of any type


enum class Actions { DoNothing, Left, Right, Rotate, Down, Drop}


class TetrisGame : ExtendedAbstractGameState {

    private var nInternalTicks = 0
    var tm = TetrisModel()

    // companion object is for a Singleton within this class
    // hence nTotalTicks is similar to a static declaration
    companion object {
        var nTotalTicks = 0L
        val xLeft = -1
        val xRight = 1
        val down = 1
        val cyclicBlockType = true
    }


    override fun totalTicks(): Long {
        return nTotalTicks
    }

    override fun resetTotalTicks() {
        nTotalTicks = 0
    }

    override fun randomInitialState(): AbstractGameState {
        // all initial states are random, so this is fine
        return this
    }

    override fun copy(): AbstractGameState {
        val tg = TetrisGame()
        tg.tm = tm.copy()
        tg.nInternalTicks = nInternalTicks
        return tg
    }

    override fun next(actions: IntArray): AbstractGameState {
        // just going to take the first action

        takeAction(actions[0])

        // every so often drop it down anyway
        if (dropSkip > 0 && (nInternalTicks % dropSkip) == 0)
            takeAction(Actions.Down.ordinal)

        // if (tm.tetronSprite == null) tm.newShape()
        nInternalTicks++
        nTotalTicks++
        return this
    }

    fun takeAction(action: Int) {
        // reset this each time - it's used for a sub-goal check
        justLanded = false
        when (action) {
            Actions.DoNothing.ordinal -> {}
            Actions.Left.ordinal -> tm.move(xLeft, 0)
            Actions.Right.ordinal -> tm.move(xRight, 0)
            Actions.Rotate.ordinal -> tm.rotate()
            Actions.Down.ordinal -> {
                if (!tm.move(0, down)) {
                    tm.place()
                    justLanded = true
                    tm.checkRows()
                    tm.newShape()

                }
            }
            Actions.Drop.ordinal -> dropDown()
        }
    }

    var justLanded = false
    fun subGoal() : Boolean {
        return justLanded
    }



    //    private fun checkState() {
//        if (!tm.move(0, Controller.down)) {
//            tm.place()
//            tm.checkRows()
//            tm.tetronSprite = null
//        }
//    }
//
    private fun dropDown() {
        while (tm.move(0, down));
        tm.place()
        justLanded = true
        tm.checkRows()
        tm.newShape()
    }

    override fun nActions(): Int {
        return Actions.values().size
    }

    override fun score(): Double {
        val penalty = if (tm.gameOn()) 0 else gameOverPenalty
        val colDiff = if (TetrisModel.includeColumnDiffs) ColHeightDiff().value(this) else 0.0
        return tm.score.toDouble() - penalty + colDiff
    }

    override fun isTerminal(): Boolean {
        return !tm.gameOn()
    }

    override fun nTicks(): Int {
        return nInternalTicks
    }
}


