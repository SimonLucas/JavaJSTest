package gui

import math.Vec2d

class ColorGradientApp : XApp {
    override fun paint(xg: XGraphics) {
        val n = 16
        val n2 = n * n
        // this will be a horizontally varying gradient
        val cw = xg.width()/n
        val ch = xg.height()/n
        val style = XStyle(stroke = false)
        repeat(n2) {
            val cx = (it % n + 0.5) * cw
            val cy = (it / n + 0.5) * ch
            style.fg = XColorHeat().getColor(it / (n2-1).toDouble())
            xg.draw(XRect(Vec2d(cx, cy), cw, ch, style))
        }
    }
}
