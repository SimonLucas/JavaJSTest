package test.misc

import util.BoxMuller
import util.StatSummary


fun main() {
    val bm = BoxMuller()
    for (i in 0 until 20) {
        println("$i\t${bm.nextGaussian()}")
    }
    val ss = StatSummary()
    for (i in 0 until 100000)
        ss.add(bm.nextGaussian())

    println(ss)

}

