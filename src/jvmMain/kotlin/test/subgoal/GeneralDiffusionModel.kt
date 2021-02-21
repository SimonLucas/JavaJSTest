package test.subgoal

import java.util.HashMap

fun main() {
    val g = LinearGraph()
}

class LinearGraph (val nNodes: Int = 10) {
    fun getGraph() : HashMap<Any,HashSet<Any>> {
        val graph = HashMap<Any,HashSet<Any>>()
        repeat(nNodes) {
            graph[it] = hashSetOf( (it + 1) % nNodes)
        }
        return graph
    }
}

class GeneralDiffusionModel (val map: HashMap<Any, Double> = HashMap()){
    fun seed(x: Any) {
        map.clear()
        map[x] = 1.0
    }

    fun totalMass() = map.values.sum()

    fun locationProbs(locs : Iterable<Any>) {
        for (s in locs) {
            println("$s -> \t ${map[s]}")
        }
    }

//    fun propagate(graph: HashMap<Any,HashMap<Any,Any>>) : GeneralDiffusionModel {
//        val next = HashMap<IntVec2d, Double>()
//        // for each current grid cell and for each action...
//        // p is probability mass of each position s
//        map.forEach { s, p ->
//            val portion = 1.0 / grid.nActions()
//            grid.actions.forEach{
//                val trial = s + it
//                val nextPos = if (grid.navigable(trial)) trial else s
//                val curMass = next[nextPos] ?: 0.0
//                next[nextPos] = curMass + portion * (map[s] ?: 0.0)
//            }
//        }
//        return GeneralDiffusionModel(next)
//    }

}
