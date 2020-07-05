package games.arcade

import ggi.AbstractGameState
import gui.XKeyEvent
import gui.XKeyEventType
import gui.XKeyMap


class AsteroidsKeyController {

    val action = ShipAction()

    fun handleKeyEvent(e: XKeyEvent) {
        // println(e)
        if (e.t == XKeyEventType.Pressed || e.t == XKeyEventType.Down) {
            keyPressed(e.keyCode)
            // println("Set current key to $currentKey")
        } else if (e.t == XKeyEventType.Released) {
            keyReleased(e.keyCode)
        }
    }

    fun keyPressed(keyCode: Int) {
        when (keyCode) {
            XKeyMap.left -> action.turn = -1.0
            XKeyMap.right -> action.turn = 1.0
            XKeyMap.space -> action.fire = true
            XKeyMap.up -> action.thrust = true
        }
    }

    fun keyReleased(keyCode: Int) {
        when (keyCode) {
            XKeyMap.left -> action.turn = 0.0
            XKeyMap.right -> action.turn = 0.0
            XKeyMap.space -> action.fire = false
            XKeyMap.up -> action.thrust = false
        }
    }

    fun getAction(gameState: AbstractGameState, playerId: Int) = action

    fun getAgentType(): String {
        return "Asteroids Key Controller"
    }
}

data class ShipAction(var turn: Double = 0.0, var thrust: Boolean = false, var fire: Boolean = false)

class ActionAdapter {
    var actions = ArrayList<ShipAction>()

    init {
        for (turn in sequenceOf(-1.0, 0.0, 1.0))
            for (thrust in sequenceOf(false, true))
                for (fire in sequenceOf(false, true)) {
                    actions.add(ShipAction(turn, thrust, fire))
                }
    }

    fun getAction(i: Int): ShipAction {
        return actions[i]
    }
}
