package games.arcade

import ggi.AbstractGameState
import ggi.ExtendedAbstractGameState
import math.Vec2d
import kotlin.math.pow

data class Ship(
    var s: Vec2d = Vec2d(),
    var v: Vec2d = Vec2d(),
    var heading: Double = 0.0,
)

data class ShipAct(
    val thrust: Double = 0.0,
    val turn: Double = 0.0,
)

object ShipActionSpace {
    val possibleThrusts = listOf(0.0, 0.1)
    val possibleTurns = listOf(-5.0, 0.0, 5.0)  // in degrees

    val allPossibleActions: List<ShipAct> = buildAllPossibleActions()

    private fun buildAllPossibleActions(): List<ShipAct> {
        val actions = mutableListOf<ShipAct>()
        for (thrust in possibleThrusts) {
            for (turn in possibleTurns) {
                actions.add(ShipAct(thrust, turn))
            }
        }
        return actions
    }
}


class ShipActuator(
    val d: Vec2d = Vec2d(0.0, -1.0),
    val lossFac: Double = 0.97,
) {
    fun act(ship: Ship, action: ShipAct) {
        ship.s += ship.v
        ship.v += d.rotatedBy(ship.heading) * action.thrust
        ship.v *= lossFac
        ship.heading += action.turn
    }
}

data class Cell(
    val x: Int,
    val y: Int,
)

class MultiShipGame(
    var w: Double = 41.0,
    var h: Double = 41.0,
    var nShips: Int = 1,
    val ships: ArrayList<Ship> = ArrayList(),
    var ticks: Int = 0,
    val actuator: ShipActuator = ShipActuator(),

    ) : ExtendedAbstractGameState {

    init {
        repeat(nShips) {
            ships.add(Ship(s = Vec2d(w / 2, h / 2)))
        }
    }

    override fun totalTicks(): Long {
        return ticks.toLong()
    }

    override fun resetTotalTicks() {
        ticks = 0
    }

    override fun randomInitialState(): AbstractGameState {
        return MultiShipGame()
    }

    override fun copy(): AbstractGameState {
        val copiedShips = ArrayList<Ship>(ships.map { it.copy() })
        return MultiShipGame(w, h, nShips, copiedShips, ticks)
    }


    override fun next(actions: IntArray): AbstractGameState {
        // apply the actions to each ship in turn
        actions.forEachIndexed { index, actionIndex ->

            val action = ShipActionSpace.allPossibleActions[actionIndex]
            actuator.act(ships[index], action)
        }
        ticks++
        return this
    }


    override fun nActions(): Int {
        // return the size of the action space to the power of the number of ships
        val actionsPerShip = ShipActionSpace.allPossibleActions.size
        // this is the number of actions per player, and assumes it is the same for all players
        return actionsPerShip
//        return actionsPerShip.pow(nShips).toInt()
    }


    override fun score(): Double {
        return 0.0
    }

    override fun isTerminal(): Boolean {
        return false
    }

    override fun nTicks(): Int {
        return ticks
    }

    override fun nUnits(): Int {
        return nShips
    }

}