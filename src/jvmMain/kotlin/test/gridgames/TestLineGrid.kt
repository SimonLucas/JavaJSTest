package test.gridgames

import games.uti.LineTester

fun main() {
    val lt = LineTester()
    lt.addReverse(3)
    println(lt.lines)
}