package test

import gui.*
import math.Vec2d
import java.awt.*
import java.awt.event.KeyAdapter
import java.awt.event.KeyEvent
import java.awt.event.MouseAdapter
import java.awt.event.MouseEvent
import java.awt.geom.Line2D
import java.awt.geom.Path2D
import java.awt.geom.Rectangle2D
import javax.swing.JComponent

class EasyComponent(val prefWidth: Int = 600, val prefHeight: Int = 400) : JComponent() {
    override fun getPreferredSize() = Dimension(prefWidth, prefHeight)

    var xg: XGraphicsJVM? = null
    var xApp: XApp? = null

    override fun paintComponent(g: Graphics?) {
        super.paintComponent(g)
        val safeXG = xg
        val app = xApp
        if (safeXG != null && app != null) {
            safeXG.graphics2D = g as Graphics2D
            if (app != null) app.paint(safeXG)
            // safeXG.redraw()
        }
    }

    fun listenForEvents() {
        val xa = xApp
        if (xa != null) addKeyListener(XKeyAdapter(xa))
        println(keyListeners)
    }
}

class XMouseAdapter(val xApp: XApp) : MouseAdapter() {
    override fun mouseClicked(e: MouseEvent?) {
        // super.mouseClicked(e)
        if (e != null)
            xApp.handleMouseEvent(
                XMouseEvent(
                    XMouseEventType.Clicked, Vec2d(e.x.toDouble(), e.y.toDouble())
                )
            )
    }

    override fun mousePressed(e: MouseEvent?) {
        super.mousePressed(e)
        if (e != null)
            xApp.handleMouseEvent(
                XMouseEvent(
                    XMouseEventType.Down, Vec2d(e.x.toDouble(), e.y.toDouble())
                )
            )
    }

    // can do this for the other types of MouseEvent also

}

class XKeyAdapter(val xApp: XApp) : KeyAdapter() {
    override fun keyPressed(e: KeyEvent?) {
        // println(e)
        super.keyPressed(e)
        if (e != null) xApp.handleKeyEvent(XKeyEvent(XKeyEventType.Pressed, e.keyCode))
    }

    override fun keyReleased(e: KeyEvent?) {
        super.keyReleased(e)
        if (e != null) xApp.handleKeyEvent(XKeyEvent(XKeyEventType.Released, e.keyCode))
    }

    override fun keyTyped(e: KeyEvent?) {
        super.keyTyped(e)
        if (e != null) xApp.handleKeyEvent(XKeyEvent(XKeyEventType.Typed, e.keyCode))
    }
}

class XGraphicsJVM(val jc: JComponent) : XGraphics {

    val drawables = ArrayList<Drawable>()

    override fun width(): Double {
        return jc.width.toDouble()
    }

    override fun height(): Double {
        return jc.height.toDouble()
    }

    var graphics2D: Graphics2D? = null

    override fun draw(toDraw: Drawable) {
        if (toDraw is XRect) drawRect(toDraw)
        if (toDraw is XPoly) drawPoly(toDraw)
        if (toDraw is XLine) drawLine(toDraw)
        if (toDraw is XText) drawText(toDraw)
    }

    fun getColor(c: XColor): Color {
        return Color(c.r, c.g, c.b, c.a)
    }


    fun drawRect(rect: XRect) {
        val g = graphics2D
        if (g != null) {
            with(rect) {
                val r2d = Rectangle2D.Double(centre.x - w / 2, centre.y - h / 2, w, h)
                with(rect.dStyle) {
                    if (fill) {
                        g.color = getColor(fg)
                        g.fill(r2d)
                    }
                    if (stroke) {
                        g.color = getColor(lc) // Color(lc.r.toFloat(), lc.g.toFloat(), lc.b.toFloat())
                        g.stroke = BasicStroke(lineWidth.toFloat())
                        g.draw(r2d)
                    }
                }
            }
        }
    }

    fun drawLine(line: XLine) {
        val g = graphics2D
        if (g != null) {
            with(line) {
                val l2d = Line2D.Double(a.x, a.y, b.x, b.y)
                with(line.dStyle) {
                    if (stroke) {
                        g.color = getColor(lc)
                        g.stroke = BasicStroke(lineWidth.toFloat())
                        g.draw(l2d)
                    }
                }
            }
        }
    }

    fun drawText(text: XText) {
        val g = graphics2D
        if (g != null) {
            with(text) {
                with(tStyle) {
                    g.color = getColor(fg)
                    g.setFont(Font("Monospaced", Font.BOLD, size.toInt()))
                    val rect: Rectangle2D = g.getFontMetrics().getStringBounds(str, g)
                    val sx = p.x.toInt() - rect.width.toInt() / 2
                    val sy: Int = p.y.toInt() + rect.height.toInt() / 2 - g.getFontMetrics().getDescent()
                    g.drawString(str, sx, sy)
                }
            }
        }
        // println(text)
    }


    fun drawPoly(poly: XPoly) {
        val path = Path2D.Double()
        with(poly) {
            path.moveTo(points[0].x, points[0].y)
            for (v in points) path.lineTo(v.x, v.y)
            if (poly.closed) path.closePath()
        }
        val g = graphics2D
        if (g != null) {
            with(poly.dStyle) {
                val at = g.transform
                g.translate(poly.start.x, poly.start.y)
                if (fill) {
                    g.color = getColor(fg)
                    g.fill(path)
                }
                if (stroke) {
                    g.color = getColor(fg)
                    g.stroke = BasicStroke(lineWidth.toFloat())
                    g.draw(path)
                }
                g.transform = at
            }
        }
    }

    override fun drawables(): ArrayList<Drawable> {
        return drawables
    }

    override fun redraw() {
        // may be not needed
        // for ()
        println("Should redraw, but what?")
    }

    override var style: XStyle = XStyle()
}
