package test.arcade

import games.arcade.ActionAdapter
import games.arcade.AsteroidsGame
import games.arcade.SampleSpriteGame
import test.geometry.timeTest
import utilities.ElapsedTimer
import util.StatSummary
import kotlin.random.Random

fun main() {
    ArcadeSpeedTest().timeTest()
}

class ArcadeSpeedTest {
    fun timeTest() {

        val ss = StatSummary("n Game Objects")
        // val game = AsteroidsGame()
        val game = SampleSpriteGame().asteroids()

        val n = 1e6.toInt()
        val t = ElapsedTimer()

        for (i in 0 until n) {
            game.next(intArrayOf(Random.nextInt(game.nActions())))
            // ss.add(game.nObjects())
        }

        println("Final score = ${game.score()}")
        println(ss)

        println("nActions = ${game.nActions()}")
        println("Action Adapter actions = ${ ActionAdapter().actions.size }")

        println(t)

    }
}
