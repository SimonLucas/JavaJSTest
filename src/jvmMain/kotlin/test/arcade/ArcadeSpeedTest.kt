package test.arcade

import games.arcade.AsteroidsGame
import test.geometry.timeTest
import util.StatSummary
import kotlin.random.Random

fun main() {
    ArcadeSpeedTest().timeTest()
}

class ArcadeSpeedTest {
    fun timeTest() {

        val ss = StatSummary("n Game Objects")
        val game = AsteroidsGame()
        val n = 1000000
        val t = System.currentTimeMillis()

        for (i in 0 until n) {
            game.next(intArrayOf(Random.nextInt(game.nActions())))
            ss.add(game.nObjects())
        }

        println("${System.currentTimeMillis() - t}ms elapsed")

        println("Final score = ${game.score()}")
        println(ss)

    }
}
