package agents.analyse

import gui.XPoly
import math.Vec2d
import util.StatSummary
import kotlin.math.min

class StickToPlanRate {
    val sequences = ArrayList<IntArray>()

    fun addSequence(seq: IntArray) {
        sequences.add(seq)
    }

    fun report(nActions: Int) {
        // pass nActions for the baseline random match expectation
        // would be work to do here
        for (s in sequences) {
            println(s.asList())
        }
        println()

        val history = analyse()
        for ((key,ss) in history) {
            // println("$key\t ${ss.n()}\t ${ss.mean()}")
        }

        val dat = ArrayList<StatSummary>()
        for ((k,v) in history) dat.add(v)
        easyPlot(dat, 1.0 / nActions.toDouble())

        // now show the entire history

//        val ep = EasyPlot()
//        JEasyFrame(ep.view, "Individual Traces")
//        ep.update(arrays)
    }

    // remember, we're going to count the number of times that we stuck to the plan
    // n steps ahead
    // the m-th sequence is the plan made at step m in the real game

    val arrays = ArrayList<DoubleArray>()

    fun analyse() : HashMap<Int,StatSummary> {
        // but do what with it?
        val history = HashMap<Int,StatSummary>()
        for (i in 0 until sequences.size) {
            val seq = sequences[i]
            // this is the action that was actually taken
            val action = seq[0]
            val eql = ArrayList<Double>()
            for (j in 0 until min(i, seq.size)) {
                // now we're going back through previous sequences
                // and checking whether the action taken was the one we planned to take as a future action
                if (history[j] == null) history[j] = StatSummary()
                val sameScore = if (action == sequences[i-j][j] ) 1 else 0
                history[j]?.add( sameScore )
                eql.add(sameScore.toDouble())
            }
            arrays.add(eql.toDoubleArray())
        }
        return history
    }

    fun easyPlot(data: ArrayList<StatSummary>, guessRate: Double): List<XPoly> {
        // todo: this needs implementing
        return ArrayList<XPoly>()
    }
}
