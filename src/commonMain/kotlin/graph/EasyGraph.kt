package graph

import evo.Solution
import games.subgoal.G
import math.IntVec2d
import kotlin.math.cos

class EasyGraph(val x: Solution, val nCols: Int, val nRows: Int) {
    val grid = ArrayAsGrid(x, nCols, nRows)
    var path: ArrayList<IntVec2d> = ArrayList()

    fun shortestPath(from: IntVec2d, to: IntVec2d): Double {
        path = ArrayList()
        if (!grid.passable(from)) return 0.0
        val search = Searcher(grid, to)
        search.search(from, null,0.0)
        val cost = search.minCost[to]
        // println("Cost = $cost")
        if (cost == null) return 0.0
        else {
            path = search.getPath(from, to)
            return cost
        }
    }
}

class Searcher (val grid: ArrayAsGrid, val to: IntVec2d) {
    val minCost = HashMap<Any, Double>()
    val prevMap = HashMap<IntVec2d,IntVec2d?>()

    fun search(cur: IntVec2d, prev: IntVec2d?, cost: Double) {
        // if we've found the target then stop searching
        // look up the known cost of getting to this node in G
        // if (cur == to) return

        // println("At node: $cur with cost $cost" )
        val bestYet = minCost[cur]

        // if bestYet is null, or new cost is better then store and propagate

        if (bestYet ==  null || cost < bestYet) {
            minCost[cur] = cost
            prevMap[cur] = prev

            // search from the successor nodes - they are all a unit
            // distance away so add 1 to the cost
            for (next in grid.nextNodes(cur))
                search(next, cur,1+cost)
        }
        // find the successor nodes
    }

    fun getPath(from: IntVec2d, to: IntVec2d) : ArrayList<IntVec2d> {
        // work backwards then reverse the list
        // return null if no such path
        var cur : IntVec2d? = to
        var path = ArrayList<IntVec2d>()
        while (cur != null) {
            path.add(cur)
            if (cur == from) return path // .reversed() as ArrayList<IntVec2d>
            cur = prevMap[cur]
        }
        return path
    }
}


class ArrayAsGrid (val a: ArrayList<Int>, val nCols: Int, val nRows: Int) {
    val nextHash = HashMap<Any,ArrayList<IntVec2d>>()
    init {
        if (a.size != nCols * nRows)
            throw Exception(
                "Array size (${a.size}) does not match grid size ($nCols x $nRows)")
    }

    companion object {
        val moves =
            arrayOf(IntVec2d(1, 0), IntVec2d(0, -1),
                IntVec2d(-1, 0), IntVec2d(0, 1)
            )
    }

    fun nextNodes(s: IntVec2d): ArrayList<IntVec2d> {
        // return it if we've already calculated it
        nextHash[s]?.let { return it }
        // otherwise calculate and store for future
        val next = ArrayList<IntVec2d>()
        for (m in moves)
            if (passable(s+m)) next.add(s+m)
        nextHash[s] = next
        return next
    }

    fun passable (s: IntVec2d) = passable(s.x, s.y)

    fun passable(x: Int, y: Int) : Boolean {
        val ix = index(x,y)
        // interpret 0 as passable
        if (ix == null) return false
        else return a[ix] == 0
    }

    fun index(x: Int, y:Int) : Int? {
        if (x < 0 || x >= nCols) return null
        if (y < 0 || y >= nRows) return null
        return x + y * nCols
    }

}

