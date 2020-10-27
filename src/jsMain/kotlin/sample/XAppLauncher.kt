package sample

import gui.*
import test.XGraphicsJS
import kotlinx.browser.document
import kotlinx.browser.window
import math.Vec2d
import org.w3c.dom.HTMLCanvasElement
import kotlin.js.Date
import kotlin.math.nextDown

class XAppLauncher(val canvasID: String, val appName: String = "HelloXKG", var intervalTime: Int = 100) {

    // note: there are better ways to do this, but this is simple
    // and ok for now, and avoids need to use reflection
    val appMap = hashMapOf<String, XApp>(
        "HelloXKG" to HelloXKG(),
        "TreeRect" to TreeRectApp()
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
        document.bgColor = "red"
//        println("doc body: ${document.body}" )
//        println("App = $app")
        window.setInterval({ update() }, intervalTime);

        val canv = canvas1
        if (canv != null) {
            val rect = canv.getBoundingClientRect();
            // canv.get
            canv.onmousedown = { e ->
                var eventType = XMouseEventType.Down
                val s = Vec2d(e.x, e.y)
                app.handleMouseEvent(XMouseEvent(eventType, Vec2d(e.x - rect.left, e.y - rect.top)))
                // println("Offset: ${Vec2d(canv.offsetLeft.toDouble(), canv.offsetTop.toDouble()) }")
//                println("Rect: " + Vec2d(rect.left.nextDown(), rect.top.nextDown()))
//                println("Raw: " + s)
                // println(e.key)
                // println(e.y)
            }
        }


    }

}
