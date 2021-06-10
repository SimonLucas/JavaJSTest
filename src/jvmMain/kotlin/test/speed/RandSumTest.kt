package test.speed

import utilities.ElapsedTimer
import kotlin.random.Random

fun main() {
    RandSumTest().testArray()
    RandSumTest().testArrayList()
}

class RandSumTest(val n: Int = 1e8.toInt()) {
    fun testArrayList() {
        val t = ElapsedTimer()
        val a = ArrayList<Double>(n)
        repeat(n) { a.add(it.toDouble()) }
        println(t)
        t.reset()
        val sum = a.sum()
        println("Sum = %.2e".format(sum))
        println(t)
        println()
    }

    fun testArray() {
        val t = ElapsedTimer()
        var i:Double = 0.0
        val a = DoubleArray(n) { i++ }
        println(t)
        t.reset()
        val sum = a.sum()
        println("Sum = %.2e".format(sum))
        println(t)
        println()
    }
}



