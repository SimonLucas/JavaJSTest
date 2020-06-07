package gui

import math.Vec2d
import kotlin.math.*
import kotlin.random.Random


data class XColor(var r:Float = 0f, var g:Float=0f, var b:Float=0f, var a:Float=1f) {
    companion object {
        val red = XColor(r = 1f)
        val green = XColor(g = 1f)
        val blue = XColor(b = 1f)
        val magenta = XColor(r = 1f, b = 1f)
        val cyan = XColor(g = 1f, b = 1f)
        val yellow = XColor(r = 1f, g = 1f)
        val white = XColor(r = 1f, g = 1f, b = 1f)
        val black = XColor()
        val gray = XColor(r = 0.5f, g = 0.5f, b = 0.5f)
        val pink = XColor(r = 1f, g = 0.5f, b = 0.5f)

    }
}

// provide a reusable palette of colors - use RGB space for now,
// but would be better to generate in HSV space to get niccer colours more easily
data class XPalette(val nColors: Int = 30, val min:Double = 0.4, val max:Double = 0.9,
                    val seed:Long=1L, val alpha:Float = 1.0f) {
    val colors = ArrayList<XColor>()
    val rand = Random(seed)
    init {
        for (i in 0 until nColors)
            colors.add(XColor(v(), v(), v(), alpha))
    }
    fun v() = rand.nextDouble(min, max).toFloat()
}

data class OldXColor(var r:Double=0.0, var g:Double=0.0, var b:Double=0.0, var a:Double = 1.0)



interface XGraphics {
    fun width() : Double
    fun height() : Double
    fun draw(toDraw: Drawable)
    fun drawables() : ArrayList<Drawable>
    fun redraw()
    var style: XStyle
}

interface Drawable {
    var dStyle: XStyle
}


data class XStyle (
    // default background, foreground and line colours
    var fg: XColor = XColor.black,
    var bg: XColor = XColor.white,
    var lc: XColor = XColor.red,
    var stroke: Boolean = true,
    var fill: Boolean = true,
    var lineWidth: Double = 2.0
)

data class TStyle (
    // default background, foreground and line colours
    var fg: XColor = XColor.cyan,
    var font: String = "Arial",
    var size: Double = 16.0
)

interface XApp {
    fun paint(xg: XGraphics)
    fun handleMouseEvent(e: XMouseEvent)
    fun handleKeyEvent(e: XKeyEvent)
}

enum class XMouseEventType {Down, Up, Moved, Dragged, Clicked}
data class XMouseEvent (val t: XMouseEventType, val s: Vec2d)

enum class XKeyEventType {Pressed, Released, Typed, Down}
data class XKeyEvent(val t: XKeyEventType, val keyCode: Int)

class XKeyMap {
    companion object {
        val left = 37
        val up = 38
        val right = 39
        val down = 40
        val space = 32
    }
}

data class XRect (var centre: Vec2d, var w: Double, var h: Double, override var dStyle: XStyle): Drawable
data class XEllipse (var centre: Vec2d, var w: Double, var h: Double, override var dStyle: XStyle): Drawable
data class XLine (var a:Vec2d, var b: Vec2d, override var dStyle: XStyle): Drawable
data class XText (var str: String, var p: Vec2d, var tStyle: TStyle, override var dStyle: XStyle) : Drawable

data class XPoly (var start: Vec2d = Vec2d(), val points: ArrayList<Vec2d>,
                  override var dStyle: XStyle = XStyle(), var closed:Boolean = true
) : Drawable {
//    private var intStyle = XStyle()
//    override var dStyle: XStyle
//        get() = intStyle
//        set(value) {intStyle = value}
}

data class XPolyOld (var start: Vec2d, val points: ArrayList<Vec2d>) : Drawable {
    private var intStyle = XStyle()
    override var dStyle: XStyle
        get() = intStyle
        set(value) {intStyle = value}
}

// data class XPolyRegular (val centre: Vec2d, val vRad: Double, val startAngle: Double) : Drawable

fun makePolygon(n: Int = 6, rad: Double = 10.0, startAngle: Double = 0.0): ArrayList<Vec2d> {
    val verts = ArrayList<Vec2d>()

    val step = (2 * PI) / n
    for (i in 0 until n) {
        val angle = startAngle + i * step
        val x = rad * sin(angle)
        val y = rad * cos(angle)
        verts.add(Vec2d(x, y))
    }
    return verts
}


