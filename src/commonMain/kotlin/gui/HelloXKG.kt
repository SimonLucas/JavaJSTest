package gui

import math.Vec2d
import kotlin.math.PI

class HelloXKG : XApp {

    var n = 0
    var dot = XEllipse(Vec2d(), 10.0, 10.0)


    override fun paint(xg: XGraphics) {
        // draw a rectangle using default style
        xg.draw(XRect(xg.centre(), xg.width()/2, xg.height()/2))

        // val message = Character
        val text = XText("Hello KXGraph: ${n++}",
            xg.centre(), TStyle(fg=XColor.yellow), XStyle())
        xg.draw(text)
        xg.draw(dot)

    }

    override fun handleMouseEvent(e: XMouseEvent) {
        n = 0
        dot.centre = e.s
    }
}
