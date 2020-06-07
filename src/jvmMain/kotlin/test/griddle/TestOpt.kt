package test.griddle

import games.griddle.GriddleControl
import games.griddle.GriddleController
import games.griddle.GriddleGame
import games.griddle.GriddleState
import games.griddle.ai.LetterGridModel
import games.griddle.ai.MCPlayer
import games.griddle.ai.OpenDealEvoPlayer
import games.griddle.ai.OpenDealRandomPlayer
import util.StatSummary

fun main() {

    val control = MyControl()
    val game = GriddleGame(control)
    game.dict = WordReader().readIntoTrie()
    game.gridScan.dict = WordReader().readIntoTrie()

    data class SeedScore(val seed: Long, val score: Double)

    // now play games ...
    val nSeeds = 2
    val nReps = 10
    val scores = ArrayList<SeedScore>()

    val randPlayer = OpenDealEvoPlayer(game.dict)
    val nTries = 100000

    for (i in 1..nSeeds) {
        control.s = i.toLong()

        val ss = StatSummary("Stats for seed: $i")
        for (j in 0 until nReps) {

            game.newGame()

            val best =
                randPlayer.nPlays(LetterGridModel(game.grid()), game.deck.deepCopy(), nTries)
            println(best.bestScore)
            println(best.best)
            best.bestScore?.let { ss.add(it) }
        }
        println(ss)
        scores.add(SeedScore(i.toLong(), ss.mean()))
    }

    val sorted = scores.sortedByDescending { it.score }
    sorted.forEach { println(it) }

    val mean = sorted.sumBy { it.score.toInt() } / sorted.size.toDouble()
    println("average score = $mean")

}

