package test.subgoal

import games.subgoal.*
import test.EasyComponent
import test.XGraphicsJVM
import utilities.JEasyFrame

fun main() {

    val ec = EasyComponent()
    val frame = JEasyFrame(ec, "Subgoal demo")
    val xg = XGraphicsJVM(ec)
    ec.xg = xg
    ec.xApp = SubgoalDemo(DefaultDemoControl())
    // frame.addKeyListener(XKeyAdapter(game))
    val frameRate = 10
    val delay = 1000 / frameRate
    while (true) {
        ec.repaint()
        Thread.sleep(delay.toLong())
    }
}
