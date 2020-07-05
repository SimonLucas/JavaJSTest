package test.misc

import utilities.ElapsedTimer
import kotlin.random.Random

fun main() {

    val n = 1e9.toInt()
    val timer = FunctionReferenceSpeedTest()
    timer.timedExec(timer::normal, n)
    timer.timedExec(timer::funcRef, n)

}

class FunctionReferenceSpeedTest {

    fun timedExec(f: (n: Int) -> Double, n:Int ) {
        println("Timing: $f")
        val t = ElapsedTimer()
        val tot = f(n)
        println(tot)
        println(t)
    }

    fun normal(n: Int) : Double {
        val rand = Random
        var tot = 0.0
        for (i in 0 until n) {
            val x = rand.nextDouble()
            tot += x * x
        }
        return tot
    }

    fun funcRef(n: Int) : Double {
        val rand = Random
        val ref =
            if (rand.nextBoolean()) this::sqr else this::cube
        var tot = 0.0
        for (i in 0 until n) {
            val x = rand.nextDouble()
            tot += ref(x)
        }
        return tot
    }

    fun cube(x: Double) = x * x * x

    fun sqr(x: Double) : Double {
        return x * x
    }
}
