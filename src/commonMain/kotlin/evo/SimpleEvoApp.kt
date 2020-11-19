package evo

import graph.EasyGraph
import gui.XApp
import gui.XGraphics
import math.IntVec2d

interface PathSource {
    fun getPath() : ArrayList<IntVec2d>?
}

class SimpleEvoApp : XApp {

    val nRows = 10
    val nCols = 20
    // val evo = SimpleEvo(nCols * nRows, 2, MaxSum())
    var eval = MazeEval(nCols, nRows)
    val evo = SimpleEvo(nCols * nRows, 2, eval, pOne = 0.0)

    val view = SimpleGridView(nCols, nRows)

    val nCycles = 500
    val itsPerCycle = 10
    var n = 0
    // val

    init {
        evo.reset()
        evo.mutProb = 5.0 / (nCols * nRows)
    }

    override fun paint(xg: XGraphics) {

        // var stableBest
        n++
        evo.run(itsPerCycle)
        // view.setData(evo.bestYet.s)
        // if (eval is PathSource) view.setPath(eval.bestPath)
        // view.message = "n = $n, best = ${evo.bestYet.f}"
        val solutionPath = eval.best
        view.setData(solutionPath.x)
        view.setPath(solutionPath.path)
        view.message = "n = ${n*itsPerCycle}, best = ${solutionPath.score}"
        view.draw(xg)
        if (n % nCycles == 0) {
            evo.reset()
            n = 0
            eval.best = SolutionPath()
        }
    }

}

data class SolutionPath (val x: Solution = Solution(),
                         val path: ArrayList<IntVec2d> = ArrayList(),
                         val score: Double = -1.0)

class MazeEval (val nCols: Int, val nRows: Int): SolutionEvaluator {
//    var bestPath: ArrayList<IntVec2d>? = null
//    var bestSolution = Solution()
    var best = SolutionPath()
    // need to keep track of the best score so far
    // to know whether the path needs updating
    override fun fitness(x: Solution): Double {
        val from = IntVec2d(nCols/2,nRows/2)
        val to = IntVec2d(nCols/2 - 1, nRows/2-1)
        val eg = EasyGraph(x, nCols, nRows, useFurthest = false)
        val score = eg.shortestPath(from, to)
        // also save path
        val path = eg.path
        if (score >= best.score) {
            val cp = Solution()
            cp.addAll(x)
            best = SolutionPath(cp, path,score)
        }
        return score
    }
    override fun aim(): Aim = Aim.Maximise
    // override fun getPath() = bestPath
}
