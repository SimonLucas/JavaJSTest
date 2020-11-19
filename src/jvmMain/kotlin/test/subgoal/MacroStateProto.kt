package test.subgoal

import agents.RandomAgent
import games.griddle.words.GridWord
import games.subgoal.Levels
import games.subgoal.SubGridState
import games.subgoal.SubGridWorld
import games.subgoal.SubgoalDemo
import ggi.AbstractGameState
import math.IntVec2d

// this is a Macro state prototype

// the idea here is to explore running playouts from the current macro state
// even if we don't know exactly what state we're in
// we can still collect statistics on it
// and make decisions

// start with a Gridworld example, and what we'll do is to
// consider state abstractions or state slices as follows:

// avatar x coordinate
// avatar y coordinate

// both coordinates

fun main() {

    // make a hash test of the vectors
    // works fine because it is a data class with
    // only primitive fields
    val iv1 = IntVec2d(1,2)
    val iv2 = IntVec2d(1, 2)

    val set = HashSet<IntVec2d>()
    set.add(iv1)
    set.add(iv2)

    println(set)

    // now - what to store in the lookup tables
    // each time we do a rollout, the idea is that we tag each element with the state slice
    // then look at the state visit stats of next state from there
    // then next time we're face with the same problem, we consult the lookup tables
    // to see what we want, and how to get there

    val nRolls = 10
    val seqLength = 100



    val level = Levels.noSubgoals
    val gridWorld = SubGridWorld(level)

    var filters = arrayListOf<StateFilter>(
        GridXFilter(), GridYFilter(), GridXYFilter()
    )

    val test = MacroStateProto(filters)
    test.initTables()
    for (i in 0 until nRolls) {
        val state = SubGridState(gridWorld.startPosition(), gridWorld)
        test.gatherStats(state, seqLength)
        println("Iteration: ${i+1}")
        test.report()
        println()
    }
}


interface StateFilter {
    fun setKey(state: Any)
    fun cp() : StateFilter
}

typealias VisitCount = HashMap<StateFilter,Int>

class MacroStateProto (val filters: ArrayList<StateFilter>){

    val agent = RandomAgent()

    // currently these tie the algorithm to the SubGridWorld

    val tables = HashMap<StateFilter,VisitCount>()

    fun initTables() {
        tables.clear()
        for (f in filters)
            tables[f] = HashMap<StateFilter,Int>()
    }

    fun report() {
        for (f in filters) {
            println("Filter: $f: -> ${tables[f]?.size}")
        }
    }

    fun gatherStats(state: AbstractGameState, seqLen: Int) {
        // run this for a rollout length until a termination condition is reached
        for (i in 0 until seqLen) {
            // run it forward, updating the filters
            val prev = state.copy()
            val action = agent.getAction(state, 0)
            state.next(intArrayOf(action))
            updateTables(state)
            updateTransitionTables(prev, action, state)
        }
    }

    fun updateTables(state: Any) {
        for (f in filters) {
            val visitCount = tables[f]
            val sf = f.cp()
            sf.setKey(state)
            visitCount?.let {
                val cur = it[sf]
                if (cur != null) it[sf] = cur + 1
                else it[sf] = 1
            }
        }
    }

    fun updateTransitionTables(prev: AbstractGameState, action: Int, state: AbstractGameState) {

        // todo: implement HashMaps to store the transition stats for each filter
        // the updateTables is already nearly there - but that just did noode occupancies

    }
}


// in this case the filters are aspects of the full state
// but they could of course be features constructed from the state
// for example, the difference in position between objects
// or even the differences between features in successive states

data class GridXFilter (var x: Int = 0) : StateFilter {
    override fun setKey(state: Any) {
        if (state is SubGridState) x = state.s.x
    }
    override fun cp(): StateFilter  = copy()
}

data class GridYFilter (var y: Int = 0) : StateFilter {
    override fun setKey(state: Any) {
        if (state is SubGridState) y = state.s.y
    }
    override fun cp(): StateFilter  = copy()
}

data class GridXYFilter (var s: IntVec2d = IntVec2d()) : StateFilter {
    override fun setKey(state: Any) {
        if (state is SubGridState) s = state.s
    }
    override fun cp(): StateFilter  = copy()
}
