package test.arcade

import games.arcade.Missile
import games.arcade.MoveAction
import games.arcade.Rock
import games.arcade.ShipAction
import games.arcade.vehicles.Asteroid
import math.Vec2d


fun main() {
    val asteroid = Asteroid(10, 10.0)
    val rock1 = Rock(asteroid.getPoly(), Vec2d(), Vec2d(1.0, 0.0))
    val rock2 = rock1.copy()

    val shipAction = ShipAction(1.0, true, false)

    rock1.update(100.0, 100.0, shipAction)
    println(rock1.s)
    println(rock2.s)

    val s = Vec2d()
    val v = Vec2d(1.0, 0.0)
    val missile1 = Missile(s,v,10, true)
    val missile2 = missile1.copy()
    missile1.update(10.0, 10.0, shipAction)

    println(missile1.s)
    println(missile2.s)
}