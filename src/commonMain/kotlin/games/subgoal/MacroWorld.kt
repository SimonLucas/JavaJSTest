package games.subgoal

import ggi.AbstractGameState
import ggi.ExtendedAbstractGameState
import ggi.SimplePlayerInterface
import math.IntVec2d
import kotlin.random.Random


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
    var nTicksX: Int = 0,
    var graph: Graph = Graph(),
    val starts: HashSet<IntVec2d> = HashSet<IntVec2d>(),
    val sub: SubGridWorld,
    var foundGoal: Boolean = false
) :
    ExtendedAbstractGameState {

    override fun copy(): AbstractGameState {
        return MacroWorld(node, value, nTicksX, graph, starts, sub, foundGoal)
    }

    // remember this is the Kotlin Singleton Pattern
    companion object {
        val maxLen = 100
        val goalScore = 100.0
        var stopAtSubgoal = true
        var totalTicks: Long = 0
    }

    val paths = ArrayList<Path>()

    fun reset() {
        starts.clear()
        starts.add(sub.startPosition())
        paths.clear()
        graph.clear()
        // println("Starts after reset: $starts")
    }

    fun allPaths() = paths

    fun bestPaths() : ArrayList<Path> {
        val bp = ArrayList<Path>()
        // now iterate over graph entries
        for ((k,v) in graph.g) {
            for ((key, sp) in v) {
                sp.path?.let{ bp.add(it) }
            }
        }
        return bp
    }

    // this is like makeMacros, but runs incrementally
    // and also build up the set of paths
    fun explorePaths(n: Int) {
        // println("Exploring from $starts, ${sub.startPosition()}")
        for (i in 0 until n) {
            val temp = ArrayList<IntVec2d>()
            temp.addAll(starts)
            for (start in temp) {
                paths.add(randomPath(start))
            }
        }
    }

    // make n iterations per subgoal
    fun makeMacros(n: Int) {
        starts.clear()
        // indexMap.clear()
        starts.addAll(sub.subgoals)
        starts.add(sub.startPosition())
        // println("Start positions: ${starts}")
        // starts.forEach { println(it) }
        // var ix = 0
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

    fun randomPath(start: IntVec2d): Path {
        // take random actionsm stopping when at a subgoal
        val path = Path()
        val state = SubGridState(start, sub)
        path.add(start)
        for (i in 1..maxLen) {
            state.next(Random.nextInt(state.nActions()))
            path.add(state.s)
            if (sub.atSubgoal(state.s) && state.s != start) {
                // found a subgoal different to where we started
                // update the graph cost
//                println("Found subgoal at ${state.s} from $start after $i steps")
                // graph.updateCost(index(start), index(state.s), i.toDouble())
                graph.updateCost(start, state.s, i.toDouble())
                // also add to set of starts
                starts.add(state.s)

                // println("Added start $starts")
                if (stopAtSubgoal) return path
            }
        }
        return path
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

        nTicksX++
        val action = actions[0]
        // the algorithm is set to choose the i-th action rather than a named one

        if (verbose) {
            println("\nAiming for action $action from ${graph.g[node]}")
            println("nActions = ${nActions()}, map size = ${graph.g[node]?.size}")
        }


        val next = graph.ithEntry(node, action)

        if (next != null) {
            // make the transition
            value -= next.value.score
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
        return nTicksX
    }

}
