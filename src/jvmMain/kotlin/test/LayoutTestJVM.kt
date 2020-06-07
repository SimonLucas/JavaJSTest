package test

import gui.layout.Layout

fun main() {
    val layout = Layout(0.1)
    val spans = layout.getSpans(100.0, 2)
    println(spans)

    val ratios = arrayListOf<Double>(0.1, 0.2, 0.3)

    println(layout.getSpans(100.0, ratios.size, ratios))

}

