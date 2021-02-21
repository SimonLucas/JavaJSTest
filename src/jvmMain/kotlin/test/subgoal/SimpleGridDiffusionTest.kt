package test.subgoal

import games.subgoal.Levels
import games.subgoal.SubGridState
import games.subgoal.SubGridWorld
import math.IntVec2d
import java.util.HashMap

fun main() {

    val gridWorld = SubGridWorld(Levels.midroom)
    val n = 20

    var dm = DiffusionModel()
    dm.seed(gridWorld.avatar)

    println(dm.map)
    for (i in 1 .. n) {
        println(i)
        dm = dm.propagate(gridWorld)
        println(dm.map)
        println(dm.totalMass())
        dm.locationProbs(gridWorld.subgoals)
        println()
    }

    dm.locationProbs(gridWorld.subgoals)

}


class DiffusionModel (val map: HashMap<IntVec2d, Double> = HashMap()){

    fun seed(iv: IntVec2d) {
        map.clear()
        map[iv] = 1.0
    }

    fun totalMass() = map.values.sum()

    fun locationProbs(locs : Iterable<IntVec2d>) {
        for (s in locs) {
            println("$s -> \t ${map[s]}")
        }
    }

    fun propagate(grid: SubGridWorld) : DiffusionModel {
        val next = HashMap<IntVec2d,Double>()
        // for each current grid cell and for each action...
        // p is probability mass of each position s
        map.forEach { s, p ->
            val portion = 1.0 / grid.nActions()
            grid.actions.forEach{
                val trial = s + it
                val nextPos = if (grid.navigable(trial)) trial else s
                val curMass = next[nextPos] ?: 0.0
                next[nextPos] = curMass + portion * (map[s] ?: 0.0)
            }
        }
        return DiffusionModel(next)
    }
}



fun copyTest() {
    val world = SubGridWorld(Levels.subgoals)
    val w2 = SubGridWorld(Levels.subgoals)
    val s1 = SubGridState(world.avatar, world)
    val s2 = SubGridState(world.avatar, world)
    val s3 = SubGridState(w2.avatar, w2)

    println(s1 == s2)
    println(s1 === s2)
    println(s1 == s3)
    // val s4 = s1.copy(s = w2.avatar)
    // println(s1 == s4)

    // println(s1.copy())

}
