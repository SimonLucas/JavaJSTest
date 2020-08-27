package sample

import games.subgoal.SubgoalDemo
import games.subgoal.SubgoalDemoControl
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLInputElement
import test.XGraphicsJS
import kotlin.browser.document
import kotlin.browser.window

class SubgoalDemoTest : SubgoalDemoControl {
    val context = canvas.getContext("2d") as CanvasRenderingContext2D
    val height = canvas.height.toDouble()
    val width = canvas.width.toDouble()

    val xg = XGraphicsJS(canvas)

    val frameRate = 10
    val intervalTime = 1000 / frameRate
    val app = SubgoalDemo( control = this)

    var nSubgoalsField: HTMLInputElement? = null

    init {
        println("Init")
        try {
            val button =
                document.getElementById("restartButton") as HTMLButtonElement
            println("Button element: $button")
            button.onclick = {
                app.reset()
            }
        } catch (e: Exception) {
            println(e)
        }

        nSubgoalsField =
            document.getElementById("nSubgoals") as HTMLInputElement
        println("Shuffle seed input element: $nSubgoalsField")

    }

    var nSubgoalsX = 10




    override fun nSubgoals(): Int {
        val input = nSubgoalsField
        if (input != null) {
            println("Returning seed = ${input.value}")
            return input.value.trim().toInt()
        } else {
            println("Failed null check: " + nSubgoalsField)
            return nSubgoalsX
        }
    }

    fun update() {
        app.paint(xg)
    }

    fun run() {
        document.bgColor = "yellow"
        window.setInterval({ update() }, intervalTime);
    }

}
