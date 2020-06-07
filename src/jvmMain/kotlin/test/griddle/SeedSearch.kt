package test.griddle

import games.griddle.GriddleControl
import games.griddle.GriddleController
import games.griddle.GriddleGame
import games.griddle.GriddleState
import games.griddle.ai.LetterGridModel
import games.griddle.ai.MCPlayer
import util.StatSummary

fun main() {

    val control = MyControl()
    val game = GriddleGame( control )
    game.dict = WordReader().readIntoTrie()
    game.gridScan.dict = WordReader().readIntoTrie()

    data class SeedScore(val seed:Long, val score: Double)

    // now play games ...
    val nSeeds = 20
    val nReps = 10
    val scores = ArrayList<SeedScore>()

    MCPlayer.nShuffles = 500
    MCPlayer.fairPlayout = true

    for (i in 1 .. nSeeds) {
        control.s = i.toLong()

        val ss = StatSummary("Stats for seed: $i")
        for (j in 0 until nReps) {

            game.newGame()

            while (game.state != GriddleState.GameOver) {
                // this will let the AI play
                game.nextState(null)
                // println("State = ${game.state}, score = ${game.score()}")

            }
            // println(game)
            ss.add(game.score())
//            println(LetterGridModel(game.a))
//            println("Seed = $i, score = ${game.score()}")

            // run it
            // while (game.game.)
        }
        println(ss)

        scores.add(SeedScore(i.toLong(), ss.mean()))
    }

    val sorted = scores.sortedByDescending { it.score }
    sorted.forEach { println(it) }

    val mean = sorted.sumBy { it.score.toInt() } / sorted.size.toDouble()
    println("average score = $mean")

}

class MyControl (var s: Long=1) : GriddleControl {
    override fun getSeed() = s
}

class HeadlessGame {




}