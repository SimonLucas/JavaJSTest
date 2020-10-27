package sample

import games.subgoal.SubgoalDemo
import games.subgoal.SubgoalDemoControl
import gui.HelloXKG
import gui.XApp
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.url.URLSearchParams
import test.XGraphicsJS
import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.dom.appendElement
import kotlinx.dom.createElement
import org.w3c.dom.HTMLCanvasElement
import kotlin.js.Date

class ArticleMultiCanvas {
//    val context = canvas.getContext("2d") as CanvasRenderingContext2D
//    val height = canvas.height.toDouble()
//    val width = canvas.width.toDouble()
//
//    val xg = XGraphicsJS(canvas)
//
//    val frameRate = 10
//    val intervalTime = 1000 / frameRate
//    val app = SubgoalDemo( control = this)

    val app = HelloXKG()

    val appMAP = HashMap<HTMLCanvasElement,XApp>()

    init {
        println("Article MultiCanvas ${Date()}")
        println("Title = ${document.title}")
        try {
            val canvas1 =
                document.getElementById("bodyCanvas") as HTMLCanvasElement
            println("Canvas element: $canvas1")
            appMAP[canvas1] = app
        } catch (e: Exception) {
            println(e)
        }
    }

    fun update() {
        appMAP.forEach { (canvas,app) ->  app.paint(XGraphicsJS(canvas))}
    }

    val intervalTime = 40

    fun run() {
        document.bgColor = "yellow"
        println("doc body: ${document.body}" )
        window.setInterval({ update() }, intervalTime);

        // window.setInterval({ update() }, intervalTime);
    }

}
