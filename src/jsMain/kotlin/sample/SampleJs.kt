package sample

import agents.RandomAgent
import agents.SimpleEvoAgent
import games.griddle.GriddleControl
import games.griddle.GriddleController
import games.tetris.TetrisController
import games.tetris.TetrisGame
import gui.*
import org.w3c.dom.events.KeyboardEvent
import test.XGraphicsJS
import games.tetris.TetrisView
import games.tetris.TetronSprite
import ggi.SimplePlayerInterface
import ggik.GameRunner
import math.Vec2d
import org.w3c.dom.*
import org.w3c.dom.events.MouseEvent
import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.dom.appendText
import kotlin.random.Random
import kotlin.time.ExperimentalTime
import kotlin.time.TestTimeSource

actual class Sample {
    actual fun checkMe() = 12
}

actual object Platform {
    actual val name: String = "JS"
}

// todo: Making a web browser window popup
// okay, done, but creates another tab in Chrome
// Safari actually pops up a new browser winder - see TestJavaScript.html

// todo: Make an HTTP call to transmit data - time allowed 90 mins, starting at 11:00


// todo: this used to work, but no longer does
// todo: does not get called now
fun main(args: Array<String>) {
    println("println() test just in main()")
//    jq {
//        console.log("Called main");
//        println("println() test")
//        BasicTest().run();
//    }
}

fun main() {
    println("Trick main")
}

val canvas = initalizeCanvas()

// val test = BasicTest().run()

@ExperimentalTime
val test = Dispatcher()

class SampleJs {}

fun initalizeCanvas(): HTMLCanvasElement {

    println("~~~Init canvas in SampleJS.kt")
    println("Document: $document")
    val canvas = document.createElement("canvas") as HTMLCanvasElement
    println("Canvas: $canvas")
    val context = canvas.getContext("2d") as CanvasRenderingContext2D
    println("Context: $context")
    context.canvas.width = window.innerWidth - 50 // 800
    context.canvas.height = window.innerHeight - 50 // 400

    println(document.body)
    val body = document.body
    body?.appendChild(canvas)
    // document.body!!.appendChild(canvas)
    println("Returning the canvas")
    return canvas

}

@ExperimentalTime
class Dispatcher() {
    val title = document.title

    init {
        when {
            title.contains("Tetris") -> BasicTest().run()
            title.contains("Speed") -> SpeedTest().run()
            title.contains("Griddle") -> GriddleTest().run()
            title.contains("Poly") -> PolyTest().run()
            title.contains("Asteroids") -> AsteroidsTest().run()
            title.contains("Subgoal") -> SubgoalDemoTest().run()
            title.contains("XKG") -> ArticleMultiCanvas().run()
            title.contains("XMLHTTP") -> HTTPTest().run()
        }
    }
}

class GriddleTest : GriddleControl {
    val context = canvas.getContext("2d") as CanvasRenderingContext2D
    val height = canvas.height.toDouble()
    val width = canvas.width.toDouble()

    var x = 0
    val xg = XGraphicsJS(canvas)
    // val app: XApp = HelloXGraphics()
    // val app = TetrisView(10, 20)


    val frameRate = 10
    val intervalTime = 1000 / frameRate
    var shuffleSeed: HTMLInputElement? = null
    var shuffleSeedYZ: HTMLInputElement? = null


    val app: GriddleController

    init {
        document.bgColor = "black"

        // val textArea = HTMLTextAreaElement()
        val t1 = jsMillis()

//        val script = document.getElementById("varTest") as HTMLScriptElement
//        println("Script element: $script")

        shuffleSeed =
            document.getElementById("shuffleSeed") as HTMLInputElement
        println("Shuffle seedyz input element: $shuffleSeed")
        shuffleSeedYZ = shuffleSeed
        println("Shuffle seedyz input element: $shuffleSeedYZ")

        val button =
            document.getElementById("newGame") as HTMLButtonElement
        println("Button element: $button")
        button.onclick = {
            newGame()
        }

        app = GriddleController(this)

        val loadedScript = document.getElementById("load") as HTMLScriptElement
        println("Loaded script element: $loadedScript")
        println(loadedScript.innerText)
        println(loadedScript.src)

//        val el = document.getElementById("output") as HTMLTextAreaElement
//        println("Output element $el")
//        println("Title = ${document.title}")
//
        // el.innerText = shuffleSeed.value

        // el.innerHTML = script.innerText
        // el.innerText = script.
        val wordString = getWords()
        val words = wordString.split("\n")
        app.loadWords(words)
        // val elapsed =
        // el.innerText = jsMillis() + " - " + t1 + "ms;  found " + words.size  // loadedScript.innerText
    }

    fun newGame() {
        println("New game")
        app.newGame()
    }

    fun getWords(): String {
        return js("gridWords")
    }

    fun jsTypeOf(o: Any): String {
        return js("typeof o")
    }

    fun jsMillis(): String {
        return js("Date.now()")
    }

    fun update() {
        // document.title = "Paint: ${x++}"
        app.paint(xg)
    }

    val rect = canvas.getBoundingClientRect();
    fun run() {
        console.log("In GriddleTestYZ run()");
        println(document.title)
        window.setInterval({ update() }, intervalTime);

        canvas.onmousedown = { e ->
            if (e is MouseEvent) {
                var eventType = XMouseEventType.Down
                app.handleMouseEvent(XMouseEvent(eventType, Vec2d(e.x - rect.left, e.y - rect.top)))
                document.title = app.game.score().toString()
                // println(e.key)
                // println(e.y)
            }
        }
    }

    override fun getSeed(): Long {
        val input = shuffleSeed
        if (input != null) {
            println("Returning seed = ${input.value}")
            return input.value.trim().toLong()
        } else {
            println("Failed null check: " + shuffleSeed)
            return 10L
        }
    }
}

class HTTPTest() {
    fun run() {
        console.log("In HTTPTest run()");
        document.title = "Testing XML HTTP"
        document.body!!.innerHTML = "<h1> Making the request </h1>"
        val responsePromise = window.fetch("./index.html")
        println(responsePromise)

    }
}

class SpeedTest() {

    @ExperimentalTime
    fun run() {
        document.onkeypress = { e ->
            if (e is KeyboardEvent) {
                var eventType = XKeyEventType.Pressed
                runTest()
            }
        }
    }

    var running = false
    val gamesPerTest = 10

    @ExperimentalTime
    val now = TestTimeSource().markNow()

    @ExperimentalTime
    fun runTest() {
        if (!running) {
            running = true

            // var init = js("var x = new Date(); document.body.innerHTML = x;")
            // var str = init.toString()
            // document.body!!.appendText("<p> $str </p>")

            // now run the test
            document.body!!.innerText = "Running: "
            var agent: SimplePlayerInterface = RandomAgent()
            agent = SimpleEvoAgent(discountFactor = 0.99)
            val game = TetrisGame()

            val stats = GameRunner().runGames(game, agent, agent, gamesPerTest)

            document.body!!.appendText("Average score: ${stats.mean()}b\n ")

//                init = js("new Date().now()")
//                document.body!!.appendText("<p> $init </p>")

            document.body!!.append("Elapsed: ( ${now.elapsedNow()} )")
            document.body!!.append("<p>nTicks: ${game.totalTicks()}</p>")
            running = false
        }
    }
}

class BasicTest() {


    val context = canvas.getContext("2d") as CanvasRenderingContext2D
    val height = canvas.height.toDouble()
    val width = canvas.width.toDouble()


    var x = 0

    val xg = XGraphicsJS(canvas)
    // val app: XApp = HelloXGraphics()
    // val app = TetrisView(10, 20)

    val app = TetrisController()

    val frameRate = 25
    val intervalTime = 1000 / frameRate

    init {
        // setData(app)
        document.bgColor = "red"

        if (document.title.contains("Speed"))
            document.title = "Picked up Speed"
        // context.canvas.
    }

    fun setData(tv: TetrisView) {
        val a = Array(tv.nCols) { IntArray(tv.nRows) { TetrisView.BG } };
        for (i in 0 until tv.nCols)
            for (j in tv.nRows / 2 until tv.nRows)
                a[i][j] = Random.nextInt(TetrisView.colors.size)

        val shape = TetronSprite(tv.nCols / 2, 3, 2, 1, 2)
        val ghost = TetronSprite(tv.nCols / 2, 7, 2, 3, 2)
        tv.setData(a, shape, ghost)
    }

    fun update() {
        app.paint(xg)
        // might do some other stuff here also ...
    }

    fun run() {
        console.log("In run()");

        println(document.title)

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
