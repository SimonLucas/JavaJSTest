package capflag

import gui.*


class CaptureTheFlagApp : XApp {
    var n = 0
    val aspectRatio = 2.0

    override fun paint(xg: XGraphics) {
        val canvasWidth = xg.width()
        val canvasHeight = xg.height()

        val scaleFactor = minOf(canvasWidth / aspectRatio, canvasHeight)

        val rectWidth = scaleFactor * aspectRatio
        val rectHeight = scaleFactor

        // Draw the rectangle centered in the canvas
        xg.draw(XRect(xg.centre(), rectWidth, rectHeight))

        // Draw the text
        val text = XText("nRepaints: ${n++}, scaleFactor: $scaleFactor",
            xg.centre(), TStyle(fg = XColor.yellow)
        )
        xg.draw(text)
    }

    override fun handleMouseEvent(e: XMouseEvent) {
        // Ignore the event details, just reset the counter
        n = 0
    }
}