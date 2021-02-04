package jvmspeed

import utilities.ElapsedTimer
import kotlin.random.Random

fun main() {
    SumSpeedTest(1e8.toInt()).sumTest()
}

class SumSpeedTest (val n:Int = 1e9.toInt()) {
    fun sumTest() {
        val t = ElapsedTimer()
        var tot = 0.0
        var count = 0
        var randSum = 0.0
        repeat(n) {
//            tot += it
            count++
            randSum += Random.nextDouble()
        }

        println(tot)
        println(t)
        println("%.2e".format(count.toDouble()))
        println("%.2e".format(randSum))
    }
}
