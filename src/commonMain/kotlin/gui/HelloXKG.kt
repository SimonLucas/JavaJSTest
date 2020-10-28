package gui

class HelloXKG : XApp {
    var n = 0

    override fun paint(xg: XGraphics) {
        // draw a rectangle using default style
        // centered in the canvas, and half the width and height
        xg.draw(XRect(xg.centre(), xg.width()/2, xg.height()/2))

        val text = XText("nRepaints: ${n++}",
            xg.centre(), TStyle(fg=XColor.yellow))
        xg.draw(text)
    }

    override fun handleMouseEvent(e: XMouseEvent) {
        // ignore the event details, just reset the counter
        n = 0
    }
}

