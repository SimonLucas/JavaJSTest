package test.subgoal

import agents.MctsAgent
import agents.PolicyEvoAgent
import agents.RandomAgent
import agents.SimpleEvoAgent
import games.subgoal.Levels
import games.subgoal.SubGridState
import games.subgoal.SubGridWorld
import ggi.AbstractGameState
import ggi.ExtendedAbstractGameState
import ggi.SimplePlayerInterface
import math.IntVec2d
import util.ElapsedTimer
import util.StatSummary
import kotlin.random.Random

fun main() {

    val grid = SubGridWorld(Levels.noSubgoals)
    grid.addRandomSubgoals(5)


    val macroWorld = MacroWorld(node = grid.startPosition(), sub = grid)
    macroWorld.makeMacros(100)
    // println(macroWorld.graph.g)
    println("Start postion: ${grid.startPosition()}")
    macroWorld.graph.print()

    println("Running tests")
    // val tester = TestMacroAgent(RandomAgent())
    // val tester = TestMacroAgent(MctsAgent())
    // val tester = TestMacroAgent(PolicyEvoAgent())
    val simpleEvo = TestMacroAgent(SimpleEvoAgent(totallyRandomMutations = false, nEvals = 50, sequenceLength = 20))

    val tester = simpleEvo

    val t = utilities.ElapsedTimer()
    val nRuns = 10
    val itsPerRun = 100
    val ss = StatSummary()
    for (i in 0 until nRuns) {
        val model = macroWorld.copy() as MacroWorld
        model.makeMacros(5000)
        val trialStats = StatSummary()
        for (j in 0 until itsPerRun) {
//            val model = macroWorld.copy() as MacroWorld
//            model.makeMacros(1000)
//            trialStats.add(tester.runTest(model as MacroWorld))
            trialStats.add(tester.runTest(model.copy() as MacroWorld))
        }
        ss.add(trialStats.max())
    }

    println("Total subgoals = ${grid.subgoals.size}" )
    println(ss)
    println(t)

}

class TestMacroAgent(val agent: SimplePlayerInterface) {
    fun runTest(world: MacroWorld, maxSteps: Int = 100): Double {
        // println("Executing test: looking for goal at: ${world.sub.goal}")
        for (i in 0 until maxSteps) {
            // println(world.nActions())
            val action = agent.getAction(world.copy(), 0)
            world.next(intArrayOf(action))
            // println(world.node)
            if (world.isTerminal()) {
                // println("Found goal after $i steps, score = ${world.score()}")
                return world.score()
            }
        }
        println("Failed to reach goal")
        return -1000.0
    }
}

class MacroWorld(
    var node: Any = IntVec2d(),
    var value: Double = 0.0,
    var nTicks: Int = 0,
    var graph: Graph = Graph(),
    val starts: HashSet<IntVec2d> = HashSet<IntVec2d>(),
    val sub: SubGridWorld,
    var foundGoal: Boolean = false
) :
    ExtendedAbstractGameState {

    override fun copy(): AbstractGameState {
        return MacroWorld(node, value, nTicks, graph, starts, sub, foundGoal)
    }

    // remember this is the Kotlin Singleton Pattern
    companion object {
        val maxLen = 100
        val goalScore = 100.0
        val stopAtSubgoal = true
        var totalTicks: Long = 0
    }

    // make n iterations per subgoal
    fun makeMacros(n: Int) {
        starts.clear()
        // indexMap.clear()
        starts.addAll(sub.subgoals)
        starts.add(sub.startPosition())
        // println("Start positions: ${starts}")
        // starts.forEach { println(it) }
        var ix = 0
        // set up the index map
        // in general not necessary, could simply use a better key for the graph
        // e.g. of type Any instead of type Int
        // for (iv in starts) indexMap.put(iv, ix++)
        for (i in 0 until n) {
            for (start in starts) {
                randomWalk(start)
            }
        }
    }

    fun randomWalk(start: IntVec2d) {
        // take random actionsm stopping when at a subgoal
        val state = SubGridState(start, sub)
        for (i in 1..maxLen) {
            state.next(Random.nextInt(state.nActions()))
            if (sub.atSubgoal(state.s) && state.s != start) {
                // found a subgoal different to where we started
                // update the graph cost
//                println("Found subgoal at ${state.s} from $start after $i steps")
                // graph.updateCost(index(start), index(state.s), i.toDouble())
                graph.updateCost(start, state.s, i.toDouble())

                if (stopAtSubgoal) return
            }
        }
    }

    // this should never return -1 - bit sloppy
    // fun index(iv: IntVec2d) = indexMap[iv] ?: -1

    override fun totalTicks(): Long {
        totalTicks++
        return totalTicks
    }

    override fun resetTotalTicks() {
        totalTicks = 0
    }

    override fun randomInitialState(): AbstractGameState {
        TODO("Not yet implemented")
    }


    val verbose = false

    override fun next(actions: IntArray): AbstractGameState {
        // if the next node is valid then go there, updating the cost in the process
        // but we'll keep the tick counter rolling even if the action is invalid
        if (isTerminal()) return this


        nTicks++
        val action = actions[0]
        // the algorithm is set to choose the i-th action rather than a named one

        if (verbose) {
            println("\nAiming for action $action from ${graph.g[node]}")
            println("nActions = ${nActions()}, map size = ${graph.g[node]?.size}")
        }


        val next = graph.ithEntry(node, action)

        if (next != null) {
            // make the transition
            value -= next.value
            node = next.key
            if (node is IntVec2d) {
                if (sub.atGoal(node as IntVec2d)) {
                    foundGoal = true
                }
            }
        }
        return this
    }

    override fun nActions(): Int {
        return graph.outArcs(node).size
    }

    override fun score(): Double {
        val score = if (isTerminal()) goalScore else 0.0
        return score + value
    }

    override fun isTerminal() = foundGoal

    override fun nTicks(): Int {
        return nTicks
    }

}

class Graph(
    val nodes: ScoredNodes = HashMap<Any, Double>(),
    val g: G = HashMap<Any, WeightedArcs>()
) {

    companion object {
        // provide a sample graph for testing
        fun sample1(): Graph {
            val g = hashMapOf<Any, WeightedArcs>(
                0 to hashMapOf<Any, Double>(1 to 10.0, 2 to 5.0)
            )
            val nodes: ScoredNodes = hashMapOf<Any, Double>(
                5 to 100.0
            )

            return Graph(nodes, g)
        }

        val emptySet = HashMap<Any, Double>()
        val maxCost = Double.MAX_VALUE
    }

    fun nodeScore(v: Any): Double = nodes[v] ?: 0.0

    fun outArcs(ix: Any): WeightedArcs {
        return g[ix] ?: emptySet
    }

    fun cost(from: Any, to: Any) = g[from]?.get(to)

    fun ithEntry(from: Any, toIndex: Int): Map.Entry<Any, Double>? {
        val weightedArcs = g[from]
        if (weightedArcs == null) return null
        val al =
            weightedArcs.asSequence().toCollection(ArrayList<Map.Entry<Any, Double>>())
        if (toIndex < al.size)
            return al[toIndex]
        else
            return null
    }


    fun updateCost(from: Any, to: Any, cost: Double) {
        val oldCost = g[from]?.get(to) ?: maxCost
        val newCost = Math.min(oldCost, cost)
        if (g[from] == null)
            g[from] = HashMap<Any, Double>()
        g[from]?.put(to, newCost)
    }

    fun print() {
        for ((k, v) in g.entries) {
            println("Node: $k")
            println("\t Arcs: $v")
            println()
        }
    }
}

typealias ScoredNodes = HashMap<Any, Double>
typealias WeightedArcs = HashMap<Any, Double>
typealias G = HashMap<Any, WeightedArcs>

