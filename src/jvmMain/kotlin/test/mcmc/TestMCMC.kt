package test.mcmc

import util.BoxMuller
import kotlin.math.exp
import kotlin.random.Random

fun main() {

    HistTest().test()

    val params = MCMCParams()
    val raisedSin: MyFunc = { x ->
        if (x >= 0 && x <= Math.PI * 2)
            kotlin.math.sin(x * x) + 1.0
        else 0.0
    }
    val a = AcceptFuncs()
    val n = 10
    repeat(n) {
        val x = (1 + it.toDouble()) / (n)
        println("$x\t ${a.expAccept(-0.2, x)}")
    }
}

typealias MyFunc = (x: Double) -> Double

data class MCMCParams(
    val nSteps: Int = 1000,
    val burnIn: Double = 0.2,
    val prior: BoxMuller = BoxMuller(),
    val pAccept: AcceptProb = ExpAccept(),
)

class HistTest (val nSamples: Int= 10000, val nBins: Int = 100){
    fun test() {
        val bm = BoxMuller()
        val hist = Histogram(0.0, 10.0, nBins)
        repeat(nSamples) {
            hist.add(5.0 + bm.nextGaussian())
        }
        println(hist)
    }
}

class Histogram (val min: Double, val max: Double, val nBins: Int = 10) {
    val bins = IntArray(nBins)
    var n = 0
    var below = 0
    var above = 0
    fun add(x: Double) {
        val bin = ((x - min) * nBins / (max - min)).toInt()
        if (bin < 0) below++
        else if (bin >= nBins) above++
        else bins[bin]++
        n++
    }

    override fun toString(): String {
        val sb = StringBuilder()
        sb.append("<  $min: \t $below \n")
        repeat(nBins) {
            val bv = min + (it.toDouble() * (max-min)) / nBins
            sb.append("> $bv: \t ${bins[it]} \n")
        }
        sb.append(">= $max: \t $above \n")
        return sb.toString()
    }



}


class SimpleMCMC(val params: MCMCParams = MCMCParams(), val f: MyFunc) {

    val mutator = BoxMuller()
    val rand = Random
    val chain = ArrayList<Double>()

    fun run() {
        var cur = params.prior.nextGaussian()
        chain.add(cur)
        repeat(params.nSteps) {
            val next = cur + mutator.nextGaussian() * 0.2
            // here we assume higher is better
            val improvement = next - cur
            val t = (1 + it) / params.nSteps
        }
    }
}

interface Func {
    fun f(x: Double): Double
}

interface AcceptProb {
    fun p(diff: Double, t: Double): Double
}

class AcceptFuncs {
    fun expAccept(diff: Double, t: Double) = exp(diff / t)
}

class ExpAccept : AcceptProb {
    override fun p(diff: Double, t: Double) =
        if (diff > 0.0)
            1.0
        else
            exp(diff / t)
}

class RaisedSine : Func {
    override fun f(x: Double) =
        if (x >= 0 && x <= Math.PI * 2)
            kotlin.math.sin(x + 1.0)
        else 0.0

}