package test.arcade

import agents.MctsAgent
import agents.PolicyEvoAgent
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
    val nGames = 30
    for (i in 0 until nGames)
        ss.add(TestArcadeAI().runOnce(1000))
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
            useShiftBuffer = true,
            discountFactor = 0.99,
            totallyRandomMutations = false
        )
//        agent = RandomAgent()
        agent = MctsAgent(rolloutLength = 100, nPlayouts = 20)
        // agent = PolicyEvoAgent()
        var step = 0
        while (!game.isTerminal() && ++step < maxSteps) {
            val action = agent.getAction(game.copy(), 0)
            game.next(intArrayOf(action))
        }
        println(" : " + game.score() + "\t " + step)
        return game.score()
    }

}
