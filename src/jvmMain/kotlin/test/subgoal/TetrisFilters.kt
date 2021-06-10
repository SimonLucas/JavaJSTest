package test.subgoal

import games.tetris.ColHeightDiff
import games.tetris.TetrisGame
import games.tetris.TetronSprite

data class TetrisShapeFilter(var sprite: TetronSprite? = null) : StateFilter {
    override fun setKey(state: Any): StateFilter {
        if (state is TetrisGame)
            sprite = state.tm.tetronSprite?.copy()
        return this
    }

    override fun cp() = TetrisShapeFilter(sprite?.copy())

}

data class TetrisHeightFilter(var list: ArrayList<Int> = ArrayList<Int>()) : StateFilter {
    override fun setKey(state: Any): StateFilter {
        if (state is TetrisGame) {
            list = ColHeightDiff().getHeights(state)
        }
        return this
    }

    override fun cp() = TetrisHeightFilter(list.clone() as ArrayList<Int>)

}

data class TetrisWallFilter(var list: ArrayList<Int> = ArrayList<Int>()) : StateFilter {
    override fun setKey(state: Any): StateFilter {
        if (state is TetrisGame) {
            list = state.tm.getWall(true)
        }
        return this
    }

    override fun cp() = TetrisWallFilter(list.clone() as ArrayList<Int>)

}

