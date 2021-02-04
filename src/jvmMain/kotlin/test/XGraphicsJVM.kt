package test

import gui.*
import gui.layout.LRect
import math.Vec2d
import java.awt.*
import java.awt.event.KeyAdapter
import java.awt.event.KeyEvent
import java.awt.event.MouseAdapter
import java.awt.event.MouseEvent
import java.awt.geom.*
import javax.swing.JComponent
import kotlin.math.min

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

    override fun mouseMoved(e: MouseEvent?) {
        super.mouseMoved(e)
        if (e != null)
            xApp.handleMouseEvent(
                XMouseEvent(
                    XMouseEventType.Moved, Vec2d(e.x.toDouble(), e.y.toDouble())
                )
            )
    }

    override fun mouseDragged(e: MouseEvent?) {
        super.mouseDragged(e)
        if (e != null)
            xApp.handleMouseEvent(
                XMouseEvent(
                    XMouseEventType.Dragged, Vec2d(e.x.toDouble(), e.y.toDouble())
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

    // var transform = Transform

    var rect: LRect? = null
    override fun setBounds(rect: LRect) {
        this.rect = rect

    }

    override fun releaseBounds() {
        rect = null
    }

    override fun setTranslate(x: Double, y: Double) {
        graphics2D?.let { it.translate(x, y) }
    }

    override fun width(): Double {
        val bounds = rect
        return if (bounds != null) bounds.width else jc.width.toDouble()
    }

    override fun height(): Double {
        val bounds = rect
        return if (bounds != null) bounds.height else jc.height.toDouble()
    }

    var graphics2D: Graphics2D? = null

    override fun draw(toDraw: Drawable) {
        val g = graphics2D
        if (g != null) {
            // apply the translation if necessary

            val bounds = rect
            if (bounds != null) {
                g.translate(bounds.xLeft, bounds.yTop)
                g.setClip(0, 0, width().toInt(), height().toInt())
            }

            if (toDraw is XRect) drawRect(toDraw)
            if (toDraw is XRoundedRect) drawRoundedRect(toDraw)
            if (toDraw is XEllipse) drawEllipse(toDraw)
            if (toDraw is XPoly) drawPoly(toDraw)
            if (toDraw is XLine) drawLine(toDraw)
            if (toDraw is XQuadCurve) drawQuadCurve(toDraw)
            if (toDraw is XText) drawText(toDraw)

            if (bounds != null) {
                g.clip = null
                g.translate(-bounds.xLeft, -bounds.yTop)
            }


        }
    }

    fun getColor(c: XColor): Color {
        return Color(c.r, c.g, c.b, c.a)
    }

    fun drawRect(rect: XRect) {
        val g = graphics2D
        if (g != null) {
            with(rect) {
                val at = g.transform
                g.translate(centre.x, centre.y)
                g.rotate(rotation)
                val r2d = Rectangle2D.Double(-w / 2, -h / 2, w, h)
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
                g.transform = at
            }
        }
    }

    fun drawRoundedRect(rect: XRoundedRect) {
        val g = graphics2D
        if (g != null) {
            with(rect) {
                val at = g.transform
                g.translate(centre.x, centre.y)
                g.rotate(rotation)
                val arc =
                    if (rect.radInPercent) min(w, h) * cornerRad
                    else cornerRad
                val r2d = RoundRectangle2D.Double(-w / 2, -h / 2, w, h, arc, arc)
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
                g.transform = at
            }
        }
    }

    fun drawEllipse(ellipse: XEllipse) {
        val g = graphics2D
        if (g != null) {
            with(ellipse) {
                val at = g.transform
                g.translate(centre.x, centre.y)
                g.rotate(rotation)
                val r2d = Ellipse2D.Double(-w / 2, -h / 2, w, h)
                with(ellipse.dStyle) {
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
                g.transform = at
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

    private fun drawQuadCurve(quadCurve: XQuadCurve) {
        val g = graphics2D
        if (g != null) {
            with(quadCurve) {
                val q2d = java.awt.geom.QuadCurve2D.Double(a.x, a.y, b.x, b.y, c.x, c.y)
                with(dStyle) {
                    if (stroke) {
                        g.color = getColor(lc)
                        g.stroke = BasicStroke(lineWidth.toFloat())
                        g.draw(q2d)
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
        if (poly.points.isEmpty()) return
        val path = Path2D.Double()
        // path.contains(0.0, 0.0)
        with(poly) {
            path.moveTo(points[0].x, points[0].y)
            for (v in points) path.lineTo(v.x, v.y)
            if (poly.closed) path.closePath()
        }
        val g = graphics2D
        if (g != null) {
            with(poly.dStyle) {
                val at = g.transform
                g.translate(poly.centre.x, poly.centre.y)
                g.rotate(poly.rotation)
                if (fill) {
                    g.color = getColor(fg)
                    g.fill(path)
                }
                if (stroke) {
                    g.color = getColor(lc)
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
