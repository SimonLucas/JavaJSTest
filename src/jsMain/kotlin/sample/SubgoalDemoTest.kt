package sample

import games.subgoal.SubgoalDemo
import games.subgoal.SubgoalDemoControl
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.url.URLSearchParams
import test.XGraphicsJS
import kotlin.browser.document
import kotlin.browser.window
import kotlin.dom.appendElement
import kotlin.dom.createElement

class SubgoalDemoTest : SubgoalDemoControl {
    val context = canvas.getContext("2d") as CanvasRenderingContext2D
    val height = canvas.height.toDouble()
    val width = canvas.width.toDouble()

    val xg = XGraphicsJS(canvas)

    val frameRate = 10
    val intervalTime = 1000 / frameRate
    val app = SubgoalDemo( control = this)

    var nSubgoalsField: HTMLInputElement? = null
    var useDoorwaysField: HTMLInputElement? = null

    var nSubgoalsX = 10

    var useDoorwaysX = false


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

        try {
            println(document.URL)
            println(window.location.href)
            println("Search params = [ ${URLSearchParams(window.location.href)} ]")
            println("nSubgoals = [ ${URLSearchParams(window.location.href).get("nSubgoals")} ]")
            // document.URL = document.URL +
        } catch (e: Exception) { println(e)}

        try {
            nSubgoalsField =
                document.getElementById("nSubgoals") as HTMLInputElement

            useDoorwaysField =
                document.getElementById("useDoorsX") as HTMLInputElement
        } catch (e: Exception) {
            println(e)
        }



        println("Shuffle seed input element: $nSubgoalsField")

    }





    override fun nSubgoals(): Int {
        nSubgoalsField?.let {
            return it.value.trim().toInt()
        }
        return nSubgoalsX
//        val input = nSubgoalsField
//        if (input != null) {
//            println("Returning seed = ${input.value}")
//            return input.value.trim().toInt()
//        } else {
//            println("Failed null check: " + nSubgoalsField)
//            return nSubgoalsX
//        }
    }

    override fun useDoorways(): Boolean {
        useDoorwaysField?.let {
            // println("Checked: ${it.checked}")
            return it.checked
        }
        return useDoorwaysX
    }


    val period = 10
    var count = 0

    fun update() {
        app.paint(xg)

        count++
        try {
            if (count % period == 0) {
                val el = document.getElementById("kControls")
                // println("el = $el")
                if (el != null) {
                    val sib = document.createElement("h3") {
                        // return@createElement
                        // return "Hello"
                    }
                    sib.textContent = "Hello h3"
                    el.innerHTML = "<h2>Count = $count</h2>"
                    // el.insertAdjacentElement("", sib)
                    // println(sib)
                }
            }
        } catch (e: Exception) {
            println(e)}

    }

    fun run() {
        document.bgColor = "yellow"
        window.setInterval({ update() }, intervalTime);
    }

}
