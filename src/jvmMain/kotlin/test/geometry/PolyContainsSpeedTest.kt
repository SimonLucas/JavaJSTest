package test.geometry

import games.arcade.vehicles.Asteroid
import gui.XPoly
import math.Vec2d
import java.lang.System.currentTimeMillis
import kotlin.random.Random

fun main() {

    timeTest()
    timeTest()
}

fun timeTest() {
    val n = 1000000
    val rand = Random

    val rad = 10.0
    val size = 10 * rad
    val nPoints = 10
    val rock = Asteroid(nPoints, 20.0).getPoly()

    // now see how long the range checks take
    val t = currentTimeMillis()
    var nIn = 0
    for (i in 0 until n) {
        if (rock.contains(Vec2d(rand.nextDouble(-size, size), rand.nextDouble(-size, size))))
            nIn++
    }
    println("$nIn  / $n")
    println("${currentTimeMillis() - t}ms elapsed")

}
