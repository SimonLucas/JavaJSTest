package evo

import kotlin.math.abs
import kotlin.random.Random

typealias Solution = ArrayList<Int>
enum class Aim { Minimise, Maximise }

interface SolutionEvaluator {
    // any solution evaluator implements a way to calculate fitness,
    // and defines whether the aim is to minimise or maximise that
    fun fitness(x: Solution): Double
    fun aim(): Aim

    // provide a standard selection function
    fun select(scoredMut: ScoredSolution, bestYet: ScoredSolution): ScoredSolution {
        if (aim() == Aim.Minimise) {
            return if (scoredMut.f <= bestYet.f) {
                // if (scoredMut.f < bestYet.f) println("New best: " + scoredMut)
                scoredMut
            } else bestYet
        } else { // must be maximising
            return if (scoredMut.f >= bestYet.f) {
                // if (scoredMut.f > bestYet.f) println("New best: " + scoredMut)
                scoredMut
            } else bestYet
        }
    }
}

// provide simple samples
class MaxSum : SolutionEvaluator {
    override fun fitness(x: Solution) = x.sum().toDouble()
    override fun aim() = Aim.Maximise
}

class MinSum : SolutionEvaluator {
    override fun fitness(x: Solution) = x.sum().toDouble()
    override fun aim() = Aim.Minimise
}

// define fitness as being as close as possible to 's'
class MinDiff (val s: Solution) : SolutionEvaluator {
    override fun aim() = Aim.Minimise
    override fun fitness(x: Solution): Double {
        return s.zip(x) { a,b -> abs(a-b)}.sum().toDouble()
    }
}

data class ScoredSolution(val s: Solution, val f: Double)

class SimpleEvo(var n: Int, var m: Int = 2, val eval: SolutionEvaluator, var pOne:Double = 0.0) {

    val rand = Random
    var mutProb = 2.0 / n

    fun run(its: Int) {
        repeat(its) {
            val mut = mutate(bestYet.s)
            val scoredMut = ScoredSolution(mut, eval.fitness(mut))
            bestYet = eval.select(scoredMut, bestYet)
        }
    }

    fun randSeq(): Solution {
        val list = Solution()
        repeat(n) { list.add(rand.nextInt(m)) }
        return list
    }

    fun randBinSeq(): Solution {
        val list = Solution()
        repeat(n) { list.add(if (rand.nextDouble() < pOne) 1 else 0) }
        return list
    }

    fun mutate(s: Solution): Solution {
        return s.map {
            if (rand.nextDouble() < mutProb) rand.nextInt(m)
            else it
        } as Solution
        // don't really like finishing off with this typecast; probably a better way
    }

    lateinit var bestYet: ScoredSolution

    init {
        reset()
    }

    fun reset() {
        // treat binary sequences a bit specially
        // so easy to tune pOne, and may have a dramatic effect
        val seq = if (m == 2) randBinSeq() else randSeq()
        val score = eval.fitness(seq)
        bestYet = ScoredSolution(seq, score)
    }


//    fun mutateOld(s: Solution): Solution {
//        val mutated = Solution()
//        for (x in s) {
//            val m = if (rand.nextDouble() < mutProb)
//                rand.nextInt(m)
//            else x
//            mutated.add( m )
//        }
//        return mutated
//    }


}



