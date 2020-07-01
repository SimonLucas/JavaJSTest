package test.arcade

import agents.RandomAgent
import agents.SimpleEvoAgent
import games.arcade.AsteroidsGame
import ggi.SimplePlayerInterface
import util.StatSummary
import utilities.ElapsedTimer
import kotlin.random.Random

fun main() {
    val t = ElapsedTimer()
    val ss = StatSummary("Score stats")
    val nGames = 10
    for (i in 0 until nGames)
        ss.add(TestArcadeAI().runOnce(500))
    println(ss)
    println("Total game ticks: " + AsteroidsGame().totalTicks())
    val speed = (AsteroidsGame.totalTicks / t.elapsed()).toInt()
    println("FPS = $speed k/s")
    println(t)
}

class TestArcadeAI() {
    fun runOnce(maxSteps:Int = 1000) : Double {

        AsteroidsGame.useActionAdapter = false
        val game = AsteroidsGame()
        var agent : SimplePlayerInterface = SimpleEvoAgent(sequenceLength = 100,
            nEvals = 20, useMutationTransducer = false,
            discountFactor = 0.99,
            probMutation = 0.05
        )
        // agent = RandomAgent()
        var step = 0
        while (!game.isTerminal() && ++step < maxSteps) {
            val action = agent.getAction(game.copy(), 0)
            game.next(intArrayOf(action))
        }
        println(" : " + game.score() + "\t " + step)
        return game.score()
    }
}
