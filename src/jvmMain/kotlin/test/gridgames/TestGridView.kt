package test.gridgames

import games.gridgames.GridGameApp
import gui.XApp
import test.EasyComponent
import test.XGraphicsJVM
import test.XMouseAdapter
import utilities.JEasyFrame

fun main() {
    val ec = EasyComponent()
    val frame = JEasyFrame(ec, "Grid game test")
    val xg = XGraphicsJVM(ec)
    ec.xg = xg

    ec.xApp = GridGameApp()
    ec.addMouseListener(XMouseAdapter(ec.xApp as XApp))

    val frameRate = 10
    val delay = 1000 / frameRate
    while (true) {
        ec.repaint()
        Thread.sleep(delay.toLong())
    }

}
