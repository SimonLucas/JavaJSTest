package games.subgoal

import ggi.AbstractGameState
import ggi.ExtendedAbstractGameState
import math.IntVec2d
import math.iv
import kotlin.random.Random

data class SubGridSnap (var s: IntVec2d, var score: Double, var subgoalReached: Boolean)

class SubGridState (var s: IntVec2d, val grid: SubGridWorld, var nTicks:Int=0,
                    var subgoalReached: Boolean = false) : ExtendedAbstractGameState {

    override fun toString(): String {
        return SubGridSnap(s, score(), subgoalReached ).toString()
    }

    override fun next(actions: IntArray): AbstractGameState {
        next(actions[0])
        return this
    }

    fun next(action: Int) {
        val temp = s + grid.actions[action]
        if (grid.navigable(temp)) {
            s = temp
            if (grid.atSubgoal(s)) subgoalReached = true
        }
        // only increment if the subgoal has not yet been reached
        if (!subgoalReached) nTicks++
    }

    companion object {
        var totalTicks:Long = 0
        val subGoalScore = 100.0
        val goalScore = 1000.0
    }

    override fun totalTicks() = totalTicks

    override fun resetTotalTicks() {
        totalTicks = 0
    }

    override fun randomInitialState(): AbstractGameState {
        TODO("Not yet implemented")
    }

    override fun copy(): AbstractGameState {
        return SubGridState(s.copy(), grid, nTicks, subgoalReached)
    }

    override fun nActions() = grid.nActions()

    override fun score(): Double {
        var x: Double = if (subgoalReached) subGoalScore else 0.0
        return x - nTicks
    }

    override fun isTerminal(): Boolean {
        return grid.atGoal(s)
    }

    override fun nTicks() = nTicks
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

    val allowDoNothing = true

    val actions = arrayListOf(
        iv(1, 0),
        iv(0, 1),
        iv(-1, 0),
        iv(0, -1)
    )

    var navigables = 0
    init {
        val lines = str.lines()
        nCols = lines[0].length
        nRows = lines.size
        a = Array(nCols) { CharArray(nRows) };
        for (i in 0 until nCols)
            for (j in 0 until nRows) {
                a[i][j] = lines[j][i]

                if (navigable(iv(i, j))) navigables++
                when(a[i][j]) {
                    goalChar -> goal = iv(i, j)
                    subGoalChar -> subgoals.add(iv(i, j))
                    avatarChar -> avatar = iv(i, j)
                }
            }

        if (allowDoNothing) actions.add(iv(0, 0))
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



    fun addRandomSubgoals(n: Int) {

        // try to add this number
        // but don't keep trying forever
        val totalAttempts = 10 * n
        var nAdditions = 0
        for (i in 0 until totalAttempts) {
            val p = IntVec2d(Random.nextInt(nCols), Random.nextInt(nRows))
            if (navigable(p) && !subgoals.contains(p)) {
                subgoals.add(p)
                nAdditions++
                if (nAdditions >= n) return
            }
        }
    }


}