package test.launch

import gui.HelloXGraphics
import gui.XApp
import test.EasyComponent
import test.XGraphicsJVM
import test.XKeyAdapter
import utilities.JEasyFrame

fun main() {

}

class AppLauncher (val app: XApp, var frameRate: Int = 25){
    val ec = EasyComponent()
    val frame = JEasyFrame(ec, "X Graphics JVM Test")
    val xg = XGraphicsJVM(ec)

    fun launch() {
        ec.xg = xg
        ec.xApp = app
        frame.addKeyListener(XKeyAdapter(app))
        val delay = 1000 / frameRate
        while (true) {
            ec.repaint()
            Thread.sleep(delay.toLong())
        }
    }

}