package test.subgoal

import agents.SimpleEvoAgent
import agents.random
import games.subgoal.Levels
import kotlin.random.Random

fun main() {
    simpleEvoTest()
}

fun simpleEvoTest() {
    val agent = SimpleEvoAgent(sequenceLength = 30, nEvals = 100, totallyRandomMutations = false)
    val grid = SubGridWorld(Levels.midroom)
    println("Subgoals: ${grid.subgoals}")

    val game = SubGridState(grid.startPosition(), grid)

    // now see how well it does

    val action = agent.getAction(game, 0)
    println("Action selected = $action")


}

fun simpleSeqTest() {
    val agent = SimpleEvoAgent(sequenceLength = 50, nEvals = 2000, totallyRandomMutations = true)
    val grid = SubGridWorld(Levels.doorway)
    val game = SubGridState(grid.startPosition(), grid)

    val nTrials = 10
    val seqLength = 20

    for (i in 1..nTrials) {
        val seq = ArrayList<Int>()
        for (i in 0 until seqLength) seq.add(Random.nextInt(grid.nActions()))
        EvalString().eval(seq, game)
        println()
    }
}

class EvalString {
    fun eval(seq: Iterable<Int>, state: SubGridState): Double {
        var cur = state.copy() as SubGridState
        for (x in seq) {
            cur.next(x)
            println("x \t: $cur")

        }
        println("Score = ${cur.score()}")
        return cur.score()
    }
}