package sample

import evo.SimpleEvoApp
import games.caveswing.CaveSwingApp
import games.gridgames.GridGameApp
import gui.*
import test.XGraphicsJS
import kotlinx.browser.document
import kotlinx.browser.window
import math.Vec2d
import org.w3c.dom.HTMLCanvasElement
import org.w3c.dom.events.KeyboardEvent
import kotlin.js.Date
import kotlin.math.nextDown

class XAppLauncher(val canvasID: String,
                   val appName: String = "HelloXKG", var intervalTime: Int = 100) {

    // note: there are better ways to do this, but this is simple
    // and ok for now, and avoids need to use reflection
    val appMap = hashMapOf<String, XApp>(
        "HelloXKG" to HelloXKG(),
        "HelloXKGraphics" to HelloXGraphics(),
        "OXO" to GridGameApp(),
        "TreeRect" to TreeRectApp(),
        "CaveSwing" to CaveSwingApp(),
        "EvoMaze" to SimpleEvoApp(),
    )


    // set this as a default, override with a specified one in the Init part
    var app: XApp = HelloXKG()
    var canvas1: HTMLCanvasElement? = null

    init {
        println("XApp Launcher ${Date()}")
        try {
            canvas1 =
                document.getElementById(canvasID) as HTMLCanvasElement
            val tmp = appMap[appName]
            tmp?.let { app = it }
            println("XApp instance: $app")
            println("XAppLauncher canvas element: $canvas1")
        } catch (e: Exception) {
            println(e)
        }
    }

    var x = 0
    fun update() {
        canvas1?.let {
            // println("Repainting: ${x++}")
            app.paint(XGraphicsJS(it))
        }
    }


    fun run() {
        document.bgColor = "#FFEEEE"
//        println("doc body: ${document.body}" )
//        println("App = $app")
        window.setInterval({ update() }, intervalTime);

        val canv = canvas1
        if (canv != null) {
            val rect = canv.getBoundingClientRect();
            // canv.get
            println("Attaching: $canvasID : $canv")
            canv.onmousedown = { e ->
                var eventType = XMouseEventType.Down
                val s = Vec2d(e.x, e.y)
                app.handleMouseEvent(XMouseEvent(eventType, Vec2d(e.x - rect.left, e.y - rect.top)))
            }
            canv.onclick = { e ->
                var eventType = XMouseEventType.Clicked
                val s = Vec2d(e.x, e.y)
                app.handleMouseEvent(XMouseEvent(eventType, Vec2d(e.x - rect.left, e.y - rect.top)))
            }

            canv.onkeypress = { e ->
                if (e is KeyboardEvent) {
                    var eventType = XKeyEventType.Pressed
                    app.handleKeyEvent(XKeyEvent(eventType, e.keyCode))
                    // println(e.key)
                }
            }

            canv.onkeydown = { e ->
                if (e is KeyboardEvent) {
                    var eventType = XKeyEventType.Down
                    app.handleKeyEvent(XKeyEvent(eventType, e.keyCode))
                    // println(e.key)
                }
            }

            canv.onkeyup = { e ->
                if (e is KeyboardEvent) {
                    var eventType = XKeyEventType.Released
                    app.handleKeyEvent(XKeyEvent(eventType, e.keyCode))
                    // println(e.key)
                }
            }



        }


    }

}
