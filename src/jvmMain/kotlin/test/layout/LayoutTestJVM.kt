package test.layout

import gui.layout.Layout
import gui.layout.LayoutTest
import test.EasyComponent
import test.XGraphicsJVM
import test.XKeyAdapter
import test.XMouseAdapter
import test.launch.AppLauncher
import utilities.JEasyFrame

fun main() {
//    val layout = Layout(0.1)
//    val spans = layout.getSpans(100.0, 2)
//    // println(spans)
//
//    val ratios = arrayListOf<Double>(0.1, 0.2, 0.3)
//    // println(layout.getSpans(100.0, ratios.size, ratios))
//
//    println("Horizontal")
//    println(layout.hPartition(200.0, 100.0, 2))
//
//    println("Vertical: ")
//    println(layout.hPartition(200.0, 100.0, 5))
//    println()
//
//    startApp()

    AppLauncher(LayoutTest()).launch()

}
