package test

import plot.EasyGraphPlot
import utilities.JEasyFrame

fun main() {
    val ec = EasyComponent()
    val frame = JEasyFrame(ec, "X Graphics JVM Test")
    val xg = XGraphicsJVM(ec)
    ec.xg = xg
    // ec.listenForEvents()
    // how to connect the app with the ec component?
    // the app takes all this in an easy way

    // change this to games.tetris when ready
    val app = EasyGraphPlot()
    ec.xApp = app
    frame.addKeyListener( XKeyAdapter(app))
    val frameRate = 25
    val delay = 1000 / frameRate
    while (true) {
        ec.repaint()
        Thread.sleep(delay.toLong())
    }
    // app.paint(xg)

}