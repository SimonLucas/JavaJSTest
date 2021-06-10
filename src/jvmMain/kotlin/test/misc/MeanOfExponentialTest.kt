package test.misc

import java.lang.Math.pow

fun main() {
    MeanOfExponentialTest(p = 0.6, n=20).convergence()
}

class MeanOfExponentialTest (val p:Double = 0.5, val n:Int = 10){
    fun convergence() {
        var sum = 0.0
        repeat(n) {
            sum += it * pow(p, it.toDouble()) * (1 - p)
            println("$it \t ${sum}")
        }
    }
}