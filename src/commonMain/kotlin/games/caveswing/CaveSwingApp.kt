package games.caveswing

import agents.RandomAgent
import agents.SimpleEvoAgent
import gui.XApp
import gui.XGraphics

class CaveSwingApp : XApp {

    val gameState = CaveGameState()
    val gameView = CaveView()
    // val player = RandomAgent()
    val player = SimpleEvoAgent()

    override fun paint(xg: XGraphics) {

        val action = player.getAction(gameState, 0)
        gameState.next(intArrayOf(action))
        if (gameState.isTerminal()) gameState.randomInitialState()
        gameView.setupGameState(gameState)
        gameView.draw(xg)

    }

}