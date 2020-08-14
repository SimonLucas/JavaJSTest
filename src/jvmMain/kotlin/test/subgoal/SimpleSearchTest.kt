package test.subgoal

import agents.SimpleEvoAgent
import games.subgoal.Levels
import games.subgoal.SubGridState
import games.subgoal.SubGridWorld
// import util.ElapsedTimer
import util.StatSummary
import utilities.ElapsedTimer
import kotlin.random.Random

fun main() {

    val t = ElapsedTimer()
    val ss = simpleEvoTest(100)
    println(ss)
    println(t)

}



fun simpleEvoTest(nTrials: Int) : StatSummary {
    val ss = StatSummary()
    for (i in 1 .. nTrials) {
        val agent = SimpleEvoAgent(sequenceLength = 40, nEvals = 500,
            totallyRandomMutations = false, probMutation = 0.3)
        val grid = SubGridWorld(Levels.midroom)
        println("Subgoals: ${grid.subgoals}")

        val game = SubGridState(grid.startPosition(), grid)
        val action = agent.getAction(game, 0)
        // println("Action selected = $action")
        val best = agent.bestScore
        if (best != null) ss.add(best)
    }
    return ss
}


fun simpleSeqTest() {
    val agent = SimpleEvoAgent(sequenceLength = 50, nEvals = 2000, totallyRandomMutations = false)
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