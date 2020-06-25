package sample

import games.griddle.GriddleControl
import games.griddle.GriddleController
import gui.XMouseEvent
import gui.XMouseEventType
import gui.geometry.ContainsTestApp
import math.Vec2d
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.HTMLScriptElement
import org.w3c.dom.events.MouseEvent
import test.XGraphicsJS
import kotlin.browser.document
import kotlin.browser.window

class PolyTest  {
    val context = canvas.getContext("2d") as CanvasRenderingContext2D
    val height = canvas.height.toDouble()
    val width = canvas.width.toDouble()


    var x = 0
    val xg = XGraphicsJS(canvas)
    // val app: XApp = HelloXGraphics()
    // val app = TetrisView(10, 20)


    val frameRate = 25
    val intervalTime = 1000 / frameRate
    val app: ContainsTestApp
    init {
        // no need for this to be in a separate iinit section...
        document.bgColor = "green"
        app = ContainsTestApp()
    }

    fun update() {
        // document.title = "Paint: ${x++}"
        app.paint(xg)
    }

    val rect = canvas.getBoundingClientRect();
    fun run() {
        console.log("In Poly Contains run()");
        window.setInterval({ update() }, intervalTime);

        canvas.onmousedown = { e ->
            if (e is MouseEvent) {
                var eventType = XMouseEventType.Down
                app.handleMouseEvent(XMouseEvent(eventType, Vec2d(e.x - rect.left, e.y - rect.top)))
                // println(e.key)
                println(e.y)
            }
        }
        canvas.onmousemove = { e ->
            if (e is MouseEvent) {
                var eventType = XMouseEventType.Moved
                app.handleMouseEvent(XMouseEvent(eventType, Vec2d(e.x - rect.left, e.y - rect.top)))
                // println(e.key)
                println(e.y)
            }
        }
    }
}