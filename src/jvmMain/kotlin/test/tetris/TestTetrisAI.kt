package test.tetris

import agents.PolicyEvoAgent
import agents.RandomAgent
import agents.SimpleEvoAgent
import games.arcade.AsteroidsGame
import games.tetris.TetrisGame
import games.tetris.TetrisModel
import ggi.SimplePlayerInterface
import util.StatSummary
import utilities.ElapsedTimer

fun main() {
    val t = ElapsedTimer()
    val ss = StatSummary("Score stats")
    val nGames = 10
    for (i in 0 until nGames)
        ss.add(TestTetrisAI().runOnce(1000))
    println(ss)
    val totalTicks = TetrisGame.nTotalTicks
    println("Total game ticks: " + totalTicks)
    val speed = (totalTicks / t.elapsed()).toInt()
    println("FPS = $speed k/s")
    println(t)
}

class TestTetrisAI() {
    fun runOnce(maxSteps:Int = 1000) : Double {

        TetrisModel.includeColumnDiffs = true
        val game = TetrisGame()
        var agent : SimplePlayerInterface = SimpleEvoAgent(sequenceLength = 100,
            nEvals = 20, useMutationTransducer = false,
            discountFactor = 0.99,
            probMutation = 0.2
        )
        // agent = RandomAgent()

        agent = PolicyEvoAgent(
            sequenceLength = 100,
            nEvals = 20, useMutationTransducer = false,
            discountFactor = 0.99,
            probMutation = 0.2
        )
        var step = 0
        while (!game.isTerminal() && ++step < maxSteps) {
            val action = agent.getAction(game.copy(), 0)
            game.next(intArrayOf(action))
        }
        println(" : " + game.score() + "\t " + step)
        return game.score()
    }
}
