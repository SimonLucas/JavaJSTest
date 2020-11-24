package test.subgoal

import agents.RandomAgent
import games.subgoal.Levels
import games.subgoal.SubGridState
import games.subgoal.SubGridWorld
import ggi.AbstractGameState
import ggi.SimplePlayerInterface

fun main() {
    val nRolls = 10
    val seqLength = 20

    val level = Levels.noSubgoals
    val gridWorld = SubGridWorld(level)

    var filters = arrayListOf<StateFilter>(
        GridXFilter(), GridYFilter(), GridXYFilter()
    )

    val test = TransitionModel(filters)
    // test.initTables()
    repeat(nRolls) {
        val state: AbstractGameState = SubGridState(gridWorld.startPosition(), gridWorld)
        test.gatherStats(state, seqLength)
        println("Iteration: ${it + 1}")
    }
    test.report()
    println()
}

// need to also model (StateFilter,Action) -> (StateFilterDis)
// now a StateFilterDis can use a VisitCount as the distribution
// however we might improve on this with some better modelling
// e.g. to calculate probability estimates also

// at the moment actions are normally coded as Ints, but they could be any keyable object

typealias VisitCount = HashMap<StateFilter, Int>
typealias ActionMap = HashMap<Any, VisitCount>
typealias ActionCount = HashMap<Any, Int>
typealias TransitionMap = HashMap<StateFilter, ActionCounter>

class StateFilterAgent(val tm: TransitionModel) : SimplePlayerInterface {
    override fun getAction(gameState: AbstractGameState, playerId: Int): Int {
        // decide what to do based on which action seems best

        return 0
    }

    override fun reset(): SimplePlayerInterface {
        TODO("Not yet implemented")
    }

    override fun getAgentType() = toString()
}

data class ActionScore(val nAct: Int, val nReached: Int, val entropy: Double)

class ActionCounter {
    val actionMap = ActionMap()
    val actionCount = ActionCount()

    // record total number of actions taken
    var n = 0
    fun recordAction(action: Any, next: StateFilter) {
        var visitCount = actionMap[action]
        if (visitCount == null) {
            visitCount = VisitCount()
            actionMap[action] = visitCount
        }

        var count = visitCount[next]
        if (count == null) count = 0
        visitCount[next] = count + 1

        n++
        var na = actionCount[action]
        if (na == null) na = 0
        actionCount[action] = na + 1

    }

    fun report() {
        println("  $n actions, ${actionMap.size} distinct")
        for (kv in actionMap)
            println("    "  +kv)
    }
}

class FilterTransitionModel(val filter: StateFilter) {
    val count = VisitCount()
    val actionCount = ActionCount()
    val transitionMap = TransitionMap()

    var cur = filter.cp()

//    fun untried(state: AbstractGameState): ArrayList<Any> {
//        val untried = ArrayList<Any>()
//        val f = filter.cp().setKey(state)
//        val tried = transitionMap[f]
//        val nTried = if (tried != null) tried.size else 0
//
//        return untried
//    }

//    fun tried(key: Any) : HashSet<Any> {
//        val actedOn = transitionMap[key]
//        val tried = ArrayList<Any>()
//        if (actedOn == null) return tried
//        for (kv in actedOn)
//            tried.add(kv.key)
//        return tried
//    }

    fun scoreActions(state: AbstractGameState): HashMap<Any, ActionScore> {
        val scores = HashMap<Any, ActionScore>()
        // in an AbstractGameState actions are indexed 0 .. (n-1)
        // so let's try all of them
        repeat(state.nActions()) {
            // todo: make a coherent way to identify possible actions
            val f = filter.cp().setKey(state)
            var nAct = transitionMap[f]
//            if (nAct == null)
//            val actionScore =
//                ActionScore()
        }
        return scores
    }


    fun recordVisit(state: AbstractGameState) {
        cur = filter.cp().setKey(state)
        var n = count[cur]
        if (n == null) n = 0
        count[cur] = n + 1
    }

    fun recordTransition(action: Any, state: AbstractGameState) {
        // actionCount: count the number of times the action has been taken in the current state
        // actionMap: map the next states
        val next = filter.cp().setKey(state)
        // println("($cur, $action) -> $next")

        // var ac
        var actionCounter = transitionMap[cur]

        if (actionCounter == null) {
            actionCounter = ActionCounter()
            transitionMap[cur] = actionCounter
        }

        actionCounter.recordAction(action, next)
        // now find the visit count hash map far taking this
        // action in the current state
        // it counts how many times we transitioned to the next state
//        var visitCount = actionMap[action]
//        if (visitCount == null) {
//            visitCount = VisitCount()
//            actionMap[action] = visitCount
//        }

        // finally update the count: increase the count
        // of sfPrev, action -> sfNext
//        var count = visitCount[next]
//        if (count == null) count = 0
//        visitCount[next] = count + 1

        // now advance the current state
        cur = next

    }

    fun report() {
        println("nNodes = ${count.size}")
        for (c in count) {
            println(c)
            val actionCounter = transitionMap[c.key]
            if (actionCounter != null)
                actionCounter.report()
        }
        println()
    }
}

// todo make a new one of these where we model it separately for each filter
class TransitionModel(val filters: ArrayList<StateFilter>) {
    val models = ArrayList<FilterTransitionModel>()
    val agent = RandomAgent()

    init {
        for (f in filters) {
            models.add(FilterTransitionModel(f))
        }
    }

    fun gatherStats(state: AbstractGameState, seqLen: Int) {
        recordVisit(state)
        for (i in 0 until seqLen) {
            val action = agent.getAction(state, 0)
            state.next(intArrayOf(action))
            recordTransition(action, state)
            recordVisit(state)
        }
    }

    private fun recordVisit(state: AbstractGameState) {
        for (m in models)
            m.recordVisit(state)
    }

    fun report() {
        for (m in models) {
            m.report()
        }
    }

    fun recordTransition(action: Any, next: AbstractGameState) {
        for (m in models)
            m.recordTransition(action, next)
    }
}

