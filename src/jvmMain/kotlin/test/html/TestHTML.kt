package test.html

import util.IntField

fun main() {

    val s1 = { for (i in 1 .. 10)  i.toString()}.toString()
    // println(s1)

    val f1 = IntField("nSubgoals", 15)
    println(f1.getHtml())
}
