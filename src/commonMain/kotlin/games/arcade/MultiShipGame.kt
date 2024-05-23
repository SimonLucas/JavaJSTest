package games.arcade

import ggi.AbstractGameState
import ggi.ExtendedAbstractGameState
import math.Vec2d

data class Ship(
    var s: Vec2d = Vec2d(),
    var v: Vec2d = Vec2d(),
    var heading: Double = 0.0,
)

data class ShipAct(
    val thrust: Double = 0.0,
    val turn: Double = 0.0,
)

class ShipActuator (
    val d: Vec2d = Vec2d(0.0, -1.0),
    val lossFac: Double = 0.97,
){
    fun act(ship: Ship, action: ShipAct) {
        ship.s += ship.v
        ship.v += d.rotatedBy(ship.heading) * action.thrust
        ship.v *= lossFac
        ship.heading += action.turn
    }
}

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
        TODO("Not yet implemented")
    }

    override fun nActions(): Int {
        TODO("Not yet implemented")
    }

    override fun score(): Double {
        TODO("Not yet implemented")
    }

    override fun isTerminal(): Boolean {
        TODO("Not yet implemented")
    }

    override fun nTicks(): Int {
        TODO("Not yet implemented")
    }

}