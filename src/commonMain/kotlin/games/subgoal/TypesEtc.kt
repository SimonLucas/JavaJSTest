package games.subgoal


import math.IntVec2d


typealias ScoredNodes = HashMap<Any, Double>
typealias WeightedArcs = HashMap<Any, Double>
typealias G = HashMap<Any, WeightedArcs>

typealias Path = ArrayList<IntVec2d>

typealias Updater = () -> Unit
