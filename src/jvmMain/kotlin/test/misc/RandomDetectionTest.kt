package test.misc

import util.StatSummary
import kotlin.random.Random

fun main() {
    val tester = RandomDetectionTest(checkRatio = 0.1, pErr = 0.01)
    tester.printTable()
    System.exit(0)


    val nTrials = 20
    val ss = StatSummary("Expected un-caught errors")
    for (i in 0 until nTrials) {
        ss.add(tester.runTest())
        println()
    }
    println()
    println(ss)
}

data class RandomDetectionTest(val pErr:Double = 0.02, val nEvents:Int = 200, val checkRatio:Double = 0.05) {
    fun runTest() : Int {
        val rand = Random
        val a = IntArray(nEvents) { t -> if (rand.nextDouble() < pErr) 1 else 0}
        var nErrs = a.sum()
        println("nErrs = $nErrs")

        // now decide which ones to check
        val deck = ArrayList<Int>()
        (0 until nEvents).forEach { deck.add(it) }
        deck.shuffle()
        val nChecks = (nEvents * checkRatio).toInt()
        println("Checking: $nChecks")
        for (i in 0 until nChecks) {
            if (a[deck[i]] == 1) {
                nErrs--
                println("Detected error in event ${deck[i]}")
            }
        }
        println("Remaining errors = $nErrs")
        return nErrs
    }

    fun printTable() {
        var pUndetected = 1.0
        var eventsRemaining = nEvents
        val expectedErrors = (pErr * nEvents).toInt()
        println("Expected errors = $expectedErrors")
        for (i in 0 until nEvents/2) {

            val detectThisTime = expectedErrors.toDouble() / eventsRemaining
            pUndetected *= (1 - detectThisTime)
            val pDetected = 1 - pUndetected

            println("${i+1}\t ${format(pDetected)}")
            eventsRemaining--

        }
    }

    fun format(p:Double) = "%.3f".format(p)
}