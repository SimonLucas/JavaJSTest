package test.arcade

import agents.RandomAgent
import agents.SimpleEvoAgent
import games.arcade.AsteroidsGame

fun main() {
    val g1 = AsteroidsGame()
    val g2 = g1.copy()

    val agent = SimpleEvoAgent(sequenceLength = 20, nEvals = 10)

    while (g1.score() < 100.0 && !g1.isTerminal()) {
        val action = agent.getAction(g1.copy(), 0)
        g1.next(intArrayOf(action))
        // println(action)
        println(g1.gobs.size)
        println(g1.score().toString() + " : " + g2.score())
    }
    println(g1.score().toString() + " : " + g2.score())

}
