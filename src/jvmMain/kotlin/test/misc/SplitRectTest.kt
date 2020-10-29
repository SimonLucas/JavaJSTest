package test.misc

import gui.*
import math.Vec2d
import test.EasyComponent
import test.XGraphicsJVM
import test.XKeyAdapter
import test.XMouseAdapter
import utilities.JEasyFrame

fun main() {
//    val p1 = Vec2d(0.0, 0.0)
//    val p2 = Vec2d(200.0, 100.0)
//    val sp = SplitRect(p1, p2)
//    val pair1 = sp.splitHorizontally(0.2)
//
//    val pair2 = sp.splitVertically(0.1)
//
//    println(pair1)
//    println()
//    println(pair2)
//    println()
//
//    val tb = TreeBuilder(1, 1.0)
//    tb.build(p1, p2, Split.V)
//    tb.rects.forEach { println(it) }

    LaunchSplitTest().run()

}

class LaunchSplitTest {
    fun run() {
        val ec = EasyComponent()
        val frame = JEasyFrame(ec, "SplitRectTest")
        val xg = XGraphicsJVM(ec)
        ec.xg = xg
        // ec.listenForEvents()
        // how to connect the app with the ec component?
        // the app takes all this in an easy way
        // change this to games.tetris when ready

        val app = TreeRectApp()
        ec.xApp = app
        frame.addKeyListener( XKeyAdapter(app))
        frame.addMouseListener(XMouseAdapter(app))
        val frameRate = 25
        val delay = 1000 / frameRate
        while (true) {
            ec.repaint()
            Thread.sleep(delay.toLong())
        }
    }
}