package test

import gui.*
import org.w3c.dom.*
import kotlin.math.PI

class XGraphicsJS(var canvas: HTMLCanvasElement) : XGraphics {

    val drawList = ArrayList<Drawable>()
    // val c = canvas

    override fun width() = canvas.width.toDouble()
    override fun height() = canvas.height.toDouble()

    override fun draw(toDraw: Drawable) {
        if (toDraw is XRect) drawRect(toDraw)
        if (toDraw is XEllipse) drawEllipse(toDraw)
        if (toDraw is XPoly) drawPoly(toDraw)
        if (toDraw is XLine) drawLine(toDraw)
        if (toDraw is XText) drawText(toDraw)
    }

    fun drawRect(rect: XRect) {
        val g = canvas
        with(rect) {
            with(rect.dStyle) {
                val context = g.getContext("2d") as CanvasRenderingContext2D
                context.save()
                context.globalAlpha = 1.0;
                context.translate(rect.centre.x, rect.centre.y)
                context.rotate(rect.rotation)

                if (fill) {
                    context.fillStyle = rgba(fg)
//                    context.fillRect(centre.x - w / 2, centre.y - h / 2, w, h)
                    context.fillRect(-w / 2,  - h / 2, w, h)
                }
                if (stroke) {
                    context.strokeStyle = rgba(lc)
                    context.lineWidth = lineWidth
//                    context.strokeRect(centre.x - w / 2, centre.y - h / 2, w, h)
                    context.strokeRect(-w / 2,  - h / 2, w, h)

                }
                context.restore()
            }
        }
    }

    fun drawEllipse(ellipse: XEllipse) {
        // this is not working yet
        val g = canvas
        with(ellipse) {
            with(ellipse.dStyle) {
                val context = g.getContext("2d") as CanvasRenderingContext2D
                context.save()
                context.globalAlpha = 1.0;
                context.translate(ellipse.centre.x, ellipse.centre.y)
                context.rotate(ellipse.rotation)

                // note: must call beginPath before adding the ellipse
                context.beginPath()
                context.ellipse(0.0,  0.0, w/2, h/2, 0.0,  0.0, PI * 2, true)

                if (fill) {
                    context.fillStyle = rgba(fg)
                    context.fill()
                }
                if (stroke) {
                    context.strokeStyle = rgba(lc)
                    context.lineWidth = lineWidth
                    context.stroke()
                }
                context.restore()
            }
        }
    }

    fun drawLine(line: XLine) {
        val g = canvas
        with(line) {
            val path = Path2D()
            path.moveTo(a.x, a.y)
            path.lineTo(b.x, b.y)
            path.closePath()
            with(line.dStyle) {
                val context = g.getContext("2d") as CanvasRenderingContext2D
                context.save()
                if (stroke) {
                    context.strokeStyle = rgba(lc)
                    context.lineWidth = lineWidth
                    context.stroke(path)
                }
                context.restore()
            }
        }
    }

    fun drawText(text: XText) {
        val g = canvas
        if (g != null) {
            with(text) {
                with(tStyle) {
                    val context = g.getContext("2d") as CanvasRenderingContext2D
                    context.save()
                    context.font = "${size.toInt()}px Arial";
                    context.fillStyle = rgba(fg)
                    // context.strokeStyle = rgba(fg)
                    // println("Set style: ${rgba(fg)} for ${text.str}")
                    context.textAlign = CanvasTextAlign.CENTER
                    val metrics = context.measureText(str)
                    context.fillText(str, p.x, p.y + metrics.actualBoundingBoxAscent/2)
                    context.restore()
                }
            }
        }
    }

    fun v(x: Float) = (255 * x).toInt()

    fun rgba(xColor: XColor): String {
        return "rgba(${v(xColor.r)}, ${v(xColor.g)}, ${v(xColor.b)}, ${xColor.a})"
    }

    fun drawPoly(poly: XPoly) {
        val path = Path2D()
        with(poly) {
            path.moveTo(points[0].x, points[0].y)
            for (v in points) path.lineTo(v.x, v.y)

            path.closePath()
        }
        val g = canvas
        if (g != null) {
            with(poly.dStyle) {
                val context = g.getContext("2d") as CanvasRenderingContext2D
                context.save();
                // context.beginPath();
                context.lineWidth = lineWidth

                // fg.b = 0.5
                context.translate(poly.centre.x, poly.centre.y)
                context.rotate(poly.rotation)
                context.fillStyle = rgba(fg)

                // context.moveTo(poly.start.x, poly.start.y)
                // println("Moving to ${poly.start}")
                if (fill)
                    context.fill(path)

                // context.moveTo(poly.start.x, poly.start.y)
                if (stroke)
                    context.strokeStyle = rgba(lc)

                context.stroke(path)
                context.restore();
            }
        }
    }


    override fun drawables(): ArrayList<Drawable> {
        return drawList
    }

    override fun redraw() {
        TODO("Not yet implemented")
    }

    var intStyle = XStyle()

    override var style: XStyle
        get() = intStyle
        set(value) {
            intStyle = value
        }
}