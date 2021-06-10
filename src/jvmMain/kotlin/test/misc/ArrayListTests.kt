package test.misc

import util.ElapsedTimer
import util.IntArrayList

fun main() {
    ArrayListTests().fastSpeedTest()
}

class ArrayListTests {
    fun testStandard() {
        val a = ArrayList<Int>()
        a.add(10)
        println(a)
        println(a[0])
        println(a[1])
    }
    fun testFast() {
        val a = IntArrayList()
        a.add(10)
        println(a)
        println(a[0])
        println(a[1])
    }

    fun standardSpeedTest(n: Int = 1e8.toInt()) {
        val t = utilities.ElapsedTimer()
        val a = ArrayList<Int>()
        repeat(n) {
            a.add(it)
        }
        var tot = 0.0
        for (x in a) tot += x
        println(tot)
        println(t)
    }

    fun fastSpeedTest(n: Int = 1e8.toInt()) {
        val t = utilities.ElapsedTimer()
        val a = IntArrayList()
        repeat(n) {
            a.add(it)
        }
        var tot = 0.0
        for (x in a) tot += x
        println(tot)
        println(t)
    }
}
