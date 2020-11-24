package test

import kotlin.random.Random

fun main() {
    // println("Hell".hashCode())

    // put some random numbers in a HashMap then see what order
    // they get printed in

    val count = HashMap<Int,Int>()

    val n = 1000
    val range = 1000
    val rand = Random
    repeat(n) {
        val key = rand.nextInt(range)
        var x = count[key]
        if (x == null) x = 0
        count[key] = 1 + x
    }
    for (kv in count)
        println(kv)

}


