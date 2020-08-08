package test.subgoal

import games.subgoal.Levels
import games.tetris.TetrisConstants
import ggi.AbstractGameState
import math.IntVec2d
import math.iv
import java.util.HashMap

fun main() {

    val gridWorld = SubGridWorld(Levels.subgoals)
    val n = 10

    var dm = DiffusionModel()
    dm.seed(gridWorld.avatar)

    println(dm.map)
    for (i in 1 .. n) {
        println(i)
        dm = dm.propagate(gridWorld)
//        println(dm.map)
//        println(dm.totalMass())
//        dm.locationProbs(gridWorld.subgoals)
//        println()
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

data class SubGridState (var s: IntVec2d, val grid: SubGridWorld) {
    fun next(action: Int) {
        val temp = s + grid.actions[action]
        if (grid.navigable(temp))
            s = temp
    }
}

class SubGridWorld(val str: String) {
    var nCols: Int
    var nRows: Int
    val a: Array<CharArray>

    var avatar = iv(0, 0)
    var goal = iv(0, 0)
    val subgoals = HashSet<IntVec2d>()

    val wallChar = 'w'
    val goalChar = '5'
    val subGoalChar = 's'
    val avatarChar = 'A'

    val allowDoNothing = false

    val actions = arrayListOf(iv(1,0), iv(0, 1), iv(-1, 0), iv(0, -1))

    var navigables = 0
    init {
        val lines = str.lines()
        nCols = lines[0].length
        nRows = lines.size
        a = Array(nCols) { CharArray(nRows) };
        for (i in 0 until nCols)
            for (j in 0 until nRows) {
                a[i][j] = lines[j][i]

                if (navigable(iv(i,j))) navigables++
                when(a[i][j]) {
                    goalChar -> goal = iv(i,j)
                    subGoalChar -> subgoals.add(iv(i,j))
                    avatarChar -> avatar = iv(i,j)
                }
            }

        if (allowDoNothing) actions.add(iv(0,0))
        subgoals.add(goal)
        println("Goal position: " + goal)
        println("Navigable locations = $navigables" )
        println(1.0 / navigables)
    }

    fun navigable(iv: IntVec2d) = a[iv.x][iv.y] != wallChar

    fun startPosition() = avatar

    fun atGoal(iv: IntVec2d) = iv == goal

    fun atSubgoal(iv: IntVec2d) = subgoals.contains(iv)

    fun nActions() = actions.size



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

