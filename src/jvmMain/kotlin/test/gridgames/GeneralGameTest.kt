package test.gridgames

import agents.RandomAgent
import com.sun.tools.attach.AgentInitializationException
import games.gridgames.TicTacToe
import ggi.AbstractGameStateMulti
import ggi.ExtendedAbstractGameStateMulti
import ggi.SimplePlayerInterfaceMulti
import util.StatSummary
import utilities.ElapsedTimer

fun main() {
    val game = TicTacToe.getGame(3)
    val tester = GeneralGameTest(game, nGames = 100)
    println(tester.runTests())
}

class GeneralGameTest(
    var game: ExtendedAbstractGameStateMulti,
    var nGames: Int = 10,
    var p1: SimplePlayerInterfaceMulti = RandomAgent(),
    var p2: SimplePlayerInterfaceMulti = RandomAgent()
) {
    fun runTests() : StatSummary {
        val t = ElapsedTimer()
        val ss = StatSummary()
        repeat(nGames) {
            println("Playing $it")
            val score = playGame()
            println("$it \t -> \t $score")
            ss.add(score)
        }
        println("Ticks per sec: " + 1000.0 * game.totalTicks() / t.elapsed())
        println(t)
        return ss
    }

    fun playGame() : Double {
        game.randomInitialState()
        val players = arrayOf(p1, p2)
        while (!game.isTerminal(0)) {
            val move = players[game.toMove()].getAction(game, game.toMove())
            game.next(intArrayOf(move))
        }
        return game.score(0)
    }

}