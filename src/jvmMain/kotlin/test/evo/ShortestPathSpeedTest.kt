package test.evo

import evo.MazeEval
import evo.SimpleEvo
import util.StatSummary
import utilities.ElapsedTimer

fun main() {
    val nRows = 15
    val nCols = 15

    val eval = MazeEval(nCols, nRows)
    val evo = SimpleEvo(nCols*nRows, 2, eval, 0.2)

    // now just generate randome sequence to be evaluated and look
    // at the stats

    val timer = ElapsedTimer()
    val n = 10000
    val ss = StatSummary()
    repeat(n) {
        ss.add(eval.fitness(evo.randBinSeq()))
    }
    println(ss)
    println(timer)

}