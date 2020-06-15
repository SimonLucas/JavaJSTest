package gui.layout

import gui.*
import math.Vec2d
import kotlin.math.exp


enum class Horizontal { Left, Center, Right, Any }
enum class Vertical { Top, Middle, Bottom, Any }
enum class Expansion { Fill, Squash }
enum class Direction {}

// todo: need ana easy way to draw each aapp in the LRect
// in its own rectangle

// todo: look in to best ways of doing this - it's very simple
// in essence, just need to translate the graphics transform
// for each one, set a clippng region, and then call the paint
// method of the child xApp

// obviously this can be done recursively also - just need to add the children
// to the LRect structure

data class LRect(
    var xLeft: Double = 0.0, var yTop: Double = 0.0,
    var width: Double, var height: Double,
    var app: XApp? = null
) {
    fun centre() = Vec2d(xLeft + width / 2, yTop + height / 2)
    fun XRect(style: XStyle) = XRect(centre(), width, height, style)
}

data class Span(val from: Double, val to: Double) {
    fun size() = to - from
}

// if aspect ratio is null then don't care about aspect ratio
// padding is for margin and between cells
data class LPane(
    var rect: LRect,
    val aspectRatio: Double? = null,
    val hPos: Horizontal = Horizontal.Any,
    val vPos: Vertical = Vertical.Any,
    val hFill: Expansion = Expansion.Fill,
    val vFill: Expansion = Expansion.Fill,
    val padding: Double = 0.02
)

class Layout(var padding: Double = 0.02) {

    fun doLayout() {

    }


    fun spaceEvenly(n: Int): List<LRect> {

        val panes = ArrayList<LRect>()
        val padTotal = padding * (n + 1)

        val remaining = 1.0 - padTotal

        return panes
    }

    fun hPartition(w: Double, h: Double, n: Int, ratios: ArrayList<Double> = ArrayList()): List<LRect> {
        val hSpans = getSpans(w, n, ratios)
        val vSpans = getSpans(h, 1)
        return expand(hSpans, vSpans)
    }

    fun vPartition(w: Double, h: Double, n: Int, ratios: ArrayList<Double> = ArrayList()): List<LRect> {
        val hSpans = getSpans(w, 1)
        val vSpans = getSpans(h, n, ratios)
        return expand(hSpans, vSpans)
    }

    fun expand(hSpans: List<Span>, vSpans: List<Span>): List<LRect> {
        val panes = ArrayList<LRect>()
        for (h in hSpans) {
            for (v in vSpans) {
                panes.add(LRect(h.from, v.from, h.size(), v.size()))
            }
        }
        return panes
    }

    fun getSpans(total: Double, n: Int, ratios: ArrayList<Double> = ArrayList<Double>()): List<Span> {

        if (ratios.isEmpty())
            (1..n).forEach { ratios.add(1.0 / n.toDouble()) }

        val spans = ArrayList<Span>()
        val padTotal = padding * (n + 1)
        val remaining = 1.0 - padTotal

        var cur = 0.0
        for (i in 0 until n) {
            // add padding in each timee
            cur += padding * total

            val sp = ratios[i] * total * remaining
            spans.add(Span(cur, cur + sp))

            cur += sp
        }



        return spans
    }

}

class LayoutTest : XApp {

    // just pop a sample layout here for now


    val plotApp: XApp = EasyGraphPlot()


    override fun paint(xg: XGraphics) {


        val layout = Layout(0.05)
        val panes = layout.hPartition(
            xg.width(), xg.height()
            , 2
        )

        panes[1].app = plotApp

        // now draw everything

        val xp = XPalette(seed = -1)

        var cIndex = 0
        val bgRect = XRect(
            xg.centre(), xg.width(), xg.height(),
            XStyle(fg = xp.colors[cIndex++])
        )
        xg.draw(bgRect)

        // draw each pane in a new color

        for (pane in panes) {
            val xRext = pane.XRect(XStyle(fg = xp.colors[cIndex++]))
            xg.draw(xRext)

            pane.app?.let {

                xg.setBounds(pane)
                it.paint(xg)
                xg.releaseBounds()
            }
            // now put the associated app in, if there is one
        }
    }

    override fun handleMouseEvent(e: XMouseEvent) {
    }

    override fun handleKeyEvent(e: XKeyEvent) {
    }

}


