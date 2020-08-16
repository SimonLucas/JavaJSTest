package games.maxgame

import ggi.AbstractGameState
import ggi.ExtendedAbstractGameState


data class MaxGame(val n: Int=10, val m: Int=2) : ExtendedAbstractGameState {
    companion object {
        var totalTicks: Long = 0
    }

    var scoreX: Int = 0
    var position = 0
    var nTicksX =0

    override fun copy(): AbstractGameState {
        val maxGame = MaxGame(n=this.n, m = this.m)
        maxGame.scoreX = scoreX
        maxGame.position = position
        maxGame.nTicksX = nTicksX
        return maxGame
    }

    override fun next(actions: IntArray): AbstractGameState {
        if (isTerminal()) return this
        // otherwise advance
        scoreX += actions[0]
        position++
        totalTicks++
        nTicksX++
        return this
    }

    override fun nActions(): Int {
        return m
    }

    override fun score(): Double {
        return scoreX.toDouble()
    }

    override fun isTerminal(): Boolean {
        return position >= n
    }

    override fun nTicks(): Int {
        return nTicksX
    }

    override fun totalTicks(): Long {
        return totalTicks
    }

    override fun resetTotalTicks() {
        totalTicks = 0
    }

    override fun randomInitialState(): AbstractGameState {
        return this
    }
}


