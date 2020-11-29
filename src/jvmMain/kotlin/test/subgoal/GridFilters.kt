package test.subgoal

import evo.GridDataSource
import games.subgoal.SubGridState
import math.IntVec2d

data class GridXFilter(var x: Int = 0) : StateFilter {
    override fun setKey(state: Any): StateFilter {
        if (state is SubGridState) x = state.s.x
        return this
    }

    override fun cp(): StateFilter = copy()
}

data class GridYFilter(var y: Int = 0) : StateFilter {
    override fun setKey(state: Any): StateFilter {
        if (state is SubGridState) y = state.s.y
        return this
    }

    override fun cp(): StateFilter = copy()
}

data class GridXYFilter(var s: IntVec2d = IntVec2d()) : StateFilter {
    override fun setKey(state: Any): StateFilter {
        if (state is SubGridState) s = state.s
        return this
    }

    override fun cp(): StateFilter = copy()
}


// these data sources are a slightly clumsy way
class XYDataSource(
    val ftm: FilterTransitionModel,
    val nc: Int, val nr: Int
) : GridDataSource {

    override fun nCols() = nc

    override fun nRows() = nr

    override fun nVisits(x: Int, y: Int): Int {
        val filterVal = GridXYFilter()
        filterVal.s = IntVec2d(x, y)
        val n = ftm.count[filterVal]
        if (n != null) return n else return 0
    }

    override fun totalVisits() = ftm.total
    override fun maxVisits() = ftm.maxVisits()

}

// on reflection I wonder if it's worth having these separate
// grid data sources - could have been easier to just pass 2d arrays...
// though this does give convenient and fast access to max and total
class XDataSource(val ftm: FilterTransitionModel, val nc: Int) : GridDataSource {
    override fun nCols() = nc
    override fun nRows() = 1

    override fun nVisits(x: Int, y: Int): Int {
        val filterVal = GridXFilter()
        filterVal.x = x
        val n = ftm.count[filterVal]
        if (n != null) return n else return 0
    }

    override fun totalVisits() = ftm.total
    override fun maxVisits() = ftm.maxVisits()

}

class YDataSource(val ftm: FilterTransitionModel, val nr: Int) : GridDataSource {
    override fun nCols() = 1
    override fun nRows() = nr

    override fun nVisits(x: Int, y: Int): Int {
        val filterVal = GridYFilter()
        filterVal.y = y
        val n = ftm.count[filterVal]
        if (n != null) return n else return 0
    }

    override fun totalVisits() = ftm.total
    override fun maxVisits() = ftm.maxVisits()
}

