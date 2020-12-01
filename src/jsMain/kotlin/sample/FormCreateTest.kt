package sample

import kotlinx.browser.document
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLParagraphElement

class FormCreateTest {

    init {
        try {
            val button =
                document.getElementById("addText") as HTMLButtonElement
            println("Button element: $button")
            val para =
                document.getElementById("testPara") as HTMLParagraphElement
            button.onclick = {
                addText("clicked", para)
            }
            addText("default", para)


        } catch (e: Exception) {
            println(e)
        }

    }

    private fun addText(message: String = "Hello", para: HTMLParagraphElement) {

        println("Called addText: $message ,  $para")

        // now check we can add elements to the para

        repeat( 10 ) {
            val el = document.createElement("h2")
            println(el)
            el.innerHTML = "$it "
            para.appendChild(
              el
            )
        }

    }
}
