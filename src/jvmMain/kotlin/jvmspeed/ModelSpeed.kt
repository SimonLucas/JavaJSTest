package jvmspeed

import games.caveswing.CaveGameState
import games.caveswing.CaveView
import agents.RandomAgent
import agents.SimpleEvoAgent
import games.arcade.MultiShipGame
import games.arcade.SampleSpriteGame
import ggi.AbstractGameState
import ggi.ExtendedAbstractGameState
import gui.XApp
import gui.XGraphics

class ModelSpeed (val state: ExtendedAbstractGameState) {

    // pass in the game state in the constructor



    //val gameState = CaveGameState()

    val player = RandomAgent()
//    val player = SimpleEvoAgent()

    // see how many next calls we can make in 1s
    fun main() {
        val t = System.currentTimeMillis()
        var totalGames = 1
        var nSteps = 0
        // make an int array with state.nUnits() elements
//        val actions = intArrayOf()
        val actions = IntArray(state.nUnits()) { 0 }
        while (System.currentTimeMillis() < (t + 1000)) {
            repeat (state.nUnits()) {
                actions[it] = player.getAction(state, it)
            }
            state.next(actions)
            nSteps += 1
            if (state.isTerminal()) {
                state.randomInitialState()
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
    val models = listOf(
        CaveGameState(),
        SampleSpriteGame().asteroids(),
        MultiShipGame(nShips = 1),
        MultiShipGame(nShips = 2),
        MultiShipGame(nShips = 10),
    )
    for (model in models) {
        ModelSpeed(model).main()
    }
}
