package ggik

import agents.RandomAgent
import ggi.AbstractGameState
import ggi.ExtendedAbstractGameState
import ggi.SimplePlayerInterface
import util.StatSummary

class GameRunner {

    var verbose = true
    var maxTicks = 5000

    fun runGames(
        gameState: ExtendedAbstractGameState,
        agent: SimplePlayerInterface,
        opponent: SimplePlayerInterface = RandomAgent(),
        nGames: Int = 10
    ) : StatSummary
    {
        val scores = StatSummary("Scores for: " + agent.toString())
        // val durations = StatSummary("Durations for: " + agent.to())
        // val timer = ElapsedTimer()

        gameState.resetTotalTicks()
        for (i in 0 until nGames) {
            gameState.randomInitialState()
            val finalState = runOneGame(gameState.copy(), agent, opponent)
            scores.add(finalState.score())
            // durations.add(finalState.nTicks())
        }
        // println(durations)
        println(scores)
        println("Total ticks: " + gameState.totalTicks())
        println()

        return scores
    }

    fun runOneGame(
        gameState: AbstractGameState,
        player: SimplePlayerInterface,
        opponent: SimplePlayerInterface
    ): AbstractGameState {
        val playerId = 0
        player.reset()
        var n = 0
        println("maxTicks = " + maxTicks)
        while (!gameState.isTerminal() && n++ < maxTicks) {
            // val actions = intArrayOf(player.getAction(deepCopy(gameState)))
            val actions = intArrayOf(
                player.getAction(gameState.copy(), playerId),
                opponent.getAction(gameState.copy(), 1 - playerId)
            )
            // println(Arrays.toString(actions))
            // println("$n\t ${gameState.score()}")
            gameState.next(actions)
        }
        if (verbose) {
            println("Game score: ${gameState.score()}")
            println("Game ticks: ${gameState.nTicks()}")
            println()
        }
        return gameState

    }
}
