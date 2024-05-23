package jvmspeed

import games.caveswing.CaveGameState
import games.caveswing.CaveView
import agents.RandomAgent
import agents.SimpleEvoAgent
import gui.XApp
import gui.XGraphics

class CaveSwingSpeed {

    val gameState = CaveGameState()

    val player = RandomAgent()
//    val player = SimpleEvoAgent()

    // see how many next calls we can make in 1s
    fun main() {
        val t = System.currentTimeMillis()
        var totalGames = 1
        var nSteps = 0
        while (System.currentTimeMillis() < (t + 1000)) {
            val action = player.getAction(gameState, 0)
            gameState.next(intArrayOf(action))
            nSteps += 1
            if (gameState.isTerminal()) {
                gameState.randomInitialState()
                totalGames++
            }
        }
        val elapsed = System.currentTimeMillis() - t
        println("Elapsed time: " + elapsed)
        println("Steps: " + nSteps)
        println("Steps per second: " + (nSteps * 1000.0) / elapsed)
        println("Games: " + totalGames)
    }
}

fun main() {
    CaveSwingSpeed().main()
}
