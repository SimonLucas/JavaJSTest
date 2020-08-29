package games.subgoal


import math.IntVec2d


typealias ScoredNodes = HashMap<Any, Double>
typealias WeightedArcs = HashMap<Any, Double>
typealias G = HashMap<Any, WeightedArcs>

typealias Path = ArrayList<IntVec2d>
data class ScoredPath (val score: Double, val path: Path? = null )

// these are graph definitions that store the best known path
// beteeen each pair of nodes together with the cost of that path
typealias ScoredPathArcs = HashMap<Any, ScoredPath>
typealias GPath = HashMap<Any, ScoredPathArcs>



interface Updater {
    fun invoke()
}
