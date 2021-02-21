package test.speed

import utilities.ElapsedTimer
import kotlin.random.Random

fun main() {
    val t = ElapsedTimer()
    val n = 2e8.toInt()
//    val rand = Random(1)
    val a = DoubleArray(n) { Random.nextDouble() }
//    val a = ArrayList<Double>(n)
//    repeat (n) { a.add(Random.nextDouble()) }
    println(t)
    t.reset()
    val sum = a.sum()
    println("Sum = %.2e".format(sum))
    println(t)
}

