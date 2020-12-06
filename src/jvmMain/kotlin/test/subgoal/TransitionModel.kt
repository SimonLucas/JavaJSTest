package test.subgoal

import agents.RandomAgent
import evo.GridDataSource
import games.subgoal.Levels
import games.subgoal.SubGridState
import games.subgoal.SubGridWorld
import ggi.AbstractGameState
import ggi.SimplePlayerInterface
import math.IntVec2d
import util.Picker
import kotlin.random.Random

fun main() {

    val transTest = TransitionModelTest().runModel()

}

data class GridDemoControl(
    var useXFilter: Boolean = true,
    var useYFilter: Boolean = true,
    var useXYFilter: Boolean = true,
    var useRFilter: Boolean = true,
    var useThetaFilter: Boolean = true,
    var useRTHetaFilter: Boolean = true,
    var useComboFilter: Boolean = true,
    var useHashSet: Boolean = true,
)

class TransitionModelTest(val explore: Boolean = true) {

    val level = Levels.noSubgoals
    val gridWorld = SubGridWorld(level)

    var gx = GridXFilter()
    var gy = GridYFilter()
    var gxy = GridXYFilter()
    var gr = GridRFilter()

    // might make a Filterbank class for convenience
    var filters = arrayListOf<StateFilter>(
        gx,
        gy,
        gxy,
        gr,
    )

    // val test = TransitionModel(filters, explore)
    val test = GraphLearner(filters)

    fun runModel(nRolls: Int = 10, seqLength: Int = 20): TransitionModelTest {
        // test.initTables()
        repeat(nRolls) {
            val state: AbstractGameState = SubGridState(gridWorld.startPosition(), gridWorld)
            test.gatherStats(state, seqLength)
            println("Iteration: ${it + 1}")
        }
        test.report()
        println()
        return this
    }

    // this code is inflexible and problematic -
    // editing out various FilterModel options
    // breaks things further down the line
    // todo: fix it
    fun getXYDataSource(): GridDataSource {
        return XYDataSource(test.models[2], gridWorld.nCols, gridWorld.nRows)
    }

    fun getXDataSource(): GridDataSource {
        return XDataSource(test.models[0], gridWorld.nCols)
    }

    fun getYDataSource(): GridDataSource {
        return YDataSource(test.models[1], gridWorld.nRows)
    }
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
            println("    " + kv)
        for (ac in actionCount) {
            println(ac)
        }
    }
}

class FilterTransitionModel(val filter: StateFilter) {
    val count = VisitCount()

    // val actionCount = ActionCount()
    val transitionMap = TransitionMap()

    var cur = filter.cp()
    var total = 0

    fun maxVisits() = count.values.maxOf { it }

    fun recordVisit(state: AbstractGameState) {
        cur = filter.cp().setKey(state)
        var n = count[cur]
        if (n == null) n = 0
        count[cur] = n + 1
        total++
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

        cur = next

    }

    fun report() {
        println("Total visits = $total")
        println("nNodes = ${count.size}")
        for (c in count) {
            println(c)
            val actionCounter = transitionMap[c.key]
            if (actionCounter != null)
                actionCounter.report()
        }
        println("Max visits to a cell: ${maxVisits()}")
        println()
    }

    fun leastUsedAction(state: AbstractGameState): Int {
        val key = filter.cp().setKey(state)
        val ac = transitionMap[key]

        // add eps random noise to action counts to break ties
        val eps = 0.1

        // if we've seen no actions then just return a random choice
        if (ac != null) {
            // better count the number of times each action has been
            // selected
            val picker = Picker<Int>(Picker.MIN_FIRST)
            repeat(state.nActions()) {
                var nTries = ac.actionCount[it]
                if (nTries == null) nTries = 0
                picker.add(nTries + Random.nextDouble(eps), it)
            }
            picker.best?.let { return it }
        }
        println("No count, Returning random action in SF: $state")
        return Random.nextInt(state.nActions())
    }

//    fun leastVisited(states: ArrayList<AbstractGameState>): AbstractGameState? {
//        val eps = 0.1
//        val picker = Picker<AbstractGameState>(Picker.MIN_FIRST)
//        for (s in states) {
//            val key = filter.cp().setKey(s)
//            var n = count[key]
//            if (n == null) n = 0
//            picker.add(n + Random.nextDouble(eps),  s)
//        }
//        return picker.best
//    }

    fun leastVisited(states: Iterable<AbstractGameState>): AbstractGameState? {
        val eps = 1e5
        val picker = Picker<AbstractGameState>(Picker.MIN_FIRST)
        var size = 0
        for (s in states) {
            size++
            val key = filter.cp().setKey(s)
            var n = count[key]
            if (n == null) n = 0
            picker.add(n + Random.nextDouble(eps), s)
        }
        println("Considered $size states")
        return picker.best
    }
}


class ActionExplorerAgent(val models: ArrayList<FilterTransitionModel>) : SimplePlayerInterface {
    // this agent picks a filter model at random and chooses
    // one of it's least used actions

    override fun getAction(gameState: AbstractGameState, playerId: Int): Int {

        val model = models[Random.nextInt(models.size)]
        return model.leastUsedAction(gameState)

    }

    override fun reset(): SimplePlayerInterface {
        TODO("Not yet implemented")
    }

    override fun getAgentType(): String {
        return this.toString()
    }


}

// class GraphLearn


class TransitionModel(val filters: ArrayList<StateFilter>, val explorer: Boolean = true) {
    val models = ArrayList<FilterTransitionModel>()
    var agent: SimplePlayerInterface = RandomAgent()

    init {
        for (f in filters) {
            models.add(FilterTransitionModel(f))
        }
        if (explorer)
            agent = ActionExplorerAgent(models)
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

