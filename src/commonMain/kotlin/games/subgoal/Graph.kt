package games.subgoal


class Graph(
    // val nodes: ScoredNodes = HashMap<Any, Double>(),
    // val g: G = HashMap<Any, WeightedArcs>()
    val g: GPath = GPath()
) {

    companion object {
        // provide a sample graph for testing
        val emptySet = ScoredPathArcs()
        val maxCost = Double.MAX_VALUE
        val maxPath = ScoredPath(maxCost)
    }

    // fun nodeScore(v: Any): Double = nodes[v] ?: 0.0

    fun outArcs(ix: Any): ScoredPathArcs {
        return g[ix] ?: emptySet
    }

    fun cost(from: Any, to: Any) : ScoredPath? = g[from]?.get(to)

    fun ithEntry(from: Any, toIndex: Int): Map.Entry<Any, ScoredPath>? {
        val scoredPathArcs = g[from]
        if (scoredPathArcs == null) return null
        val al =
            scoredPathArcs.asSequence().toCollection(ArrayList<Map.Entry<Any, ScoredPath>>())
        if (toIndex < al.size)
            return al[toIndex]
        else
            return null
    }

    fun updateCost(from: Any, to: Any, cost: Double, path: Path? = null) {
        val oldCost = g[from]?.get(to) ?: maxPath
        if (cost < oldCost.score) {
            if (g[from] == null)
                g[from] = ScoredPathArcs()
            g[from]?.put(to, ScoredPath(cost, path))
        }
    }

    fun print() {
        for ((k, v) in g.entries) {
            println("Node: $k")
            println("\t Arcs: $v")
            println()
        }
    }
}

