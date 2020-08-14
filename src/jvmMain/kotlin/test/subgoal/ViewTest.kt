package test.subgoal

import games.subgoal.GridWorldView
import games.subgoal.Levels
import games.subgoal.SubGridWorld
import games.tetris.TetrisModel
import gui.layout.TetrisDemoLayout
import test.EasyComponent
import test.XGraphicsJVM
import test.XKeyAdapter
import utilities.JEasyFrame

fun main() {
    val gridWorld = SubGridWorld(Levels.midroom)



    val ec = EasyComponent()
    val frame = JEasyFrame(ec, "X Tetris JVM Test")
    val xg = XGraphicsJVM(ec)
    ec.xg = xg

    val viewApp = GridWorldView(gridWorld)

    ec.xApp = viewApp
    // frame.addKeyListener(XKeyAdapter(game))
    val frameRate = 10
    val delay = 1000 / frameRate
    while (true) {
        ec.repaint()
        Thread.sleep(delay.toLong())
    }

}

