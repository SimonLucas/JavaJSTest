package test.layout

import gui.layout.Layout
import gui.layout.LayoutTest
import test.EasyComponent
import test.XGraphicsJVM
import test.XKeyAdapter
import test.XMouseAdapter
import utilities.JEasyFrame

fun main() {
    val layout = Layout(0.1)
    val spans = layout.getSpans(100.0, 2)
    // println(spans)

    val ratios = arrayListOf<Double>(0.1, 0.2, 0.3)
    // println(layout.getSpans(100.0, ratios.size, ratios))

    println("Horizontal")
    println(layout.hPartition(200.0, 100.0, 2))

    println("Vertical: ")
    println(layout.hPartition(200.0, 100.0, 5))
    println()

    startApp()
}

fun startApp() {
    val ec = EasyComponent(600, 600)
    val frame = JEasyFrame(ec, "X Graphics Layout Test")
    val xg = XGraphicsJVM(ec)
    ec.xg = xg
    val app = LayoutTest()
    ec.xApp = app

    frame.addKeyListener(XKeyAdapter(app))
    ec.addMouseListener(XMouseAdapter(app))
    ec.addMouseMotionListener(XMouseAdapter(app))

    val frameRate = 25
    val delay = 1000 / frameRate
    while (true) {
        ec.repaint()
        Thread.sleep(delay.toLong())
    }
}
