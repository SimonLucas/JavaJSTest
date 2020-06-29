package sample

import games.arcade.ArcadeTestApp
import games.arcade.AsteroidsGame
import games.griddle.GriddleControl
import games.griddle.GriddleController
import gui.*
import gui.geometry.ContainsTestApp
import math.Vec2d
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.HTMLScriptElement
import org.w3c.dom.events.KeyboardEvent
import org.w3c.dom.events.MouseEvent
import test.XGraphicsJS
import kotlin.browser.document
import kotlin.browser.window

class AsteroidsTest {
    val context = canvas.getContext("2d") as CanvasRenderingContext2D
    val height = canvas.height.toDouble()
    val width = canvas.width.toDouble()

    // var x = 0
    val xg = XGraphicsJS(canvas)

    val frameRate = 25
    val intervalTime = 1000 / frameRate
    val app: XApp = ArcadeTestApp()


    fun update() {
        // document.title = "Paint: ${app.}"
        app.paint(xg)
    }

    fun run() {
        document.bgColor = "black"

        document.onkeypress = { e ->
            if (e is KeyboardEvent) {
                var eventType = XKeyEventType.Pressed
                app.handleKeyEvent(XKeyEvent(eventType, e.keyCode))
                // println(e.key)
            }
        }

        document.onkeydown = { e ->
            if (e is KeyboardEvent) {
                var eventType = XKeyEventType.Down
                app.handleKeyEvent(XKeyEvent(eventType, e.keyCode))
                // println(e.key)
            }
        }

        document.onkeyup = { e ->
            if (e is KeyboardEvent) {
                var eventType = XKeyEventType.Released
                app.handleKeyEvent(XKeyEvent(eventType, e.keyCode))
                // println(e.key)
            }
        }

        window.setInterval({ update() }, intervalTime);


    }
}