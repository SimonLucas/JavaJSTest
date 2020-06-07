package gui.layout

import gui.XApp
import gui.XGraphics
import gui.XKeyEvent
import gui.XMouseEvent
import kotlin.math.exp


enum class Horizontal { Left, Center, Right, Any }
enum class Vertical { Top, Middle, Bottom, Any }
enum class Expansion { Fill, Squash }
enum class Direction {}

data class LRect(var xLeft: Double = 0.0, var yTop: Double = 0.0, var width: Double, var height: Double)
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

    fun hPartition(w: Double, h:Double, n: Int, ratios: ArrayList<Double> = ArrayList() ) : List<LRect> {
        val hSpans = getSpans(w, n, ratios)
        val vSpans = getSpans(h, 1)
        return expand(hSpans, vSpans)
    }

    fun vPartition(w: Double, h:Double, n: Int, ratios: ArrayList<Double> = ArrayList() ) : List<LRect> {
        val hSpans = getSpans(w, 1)
        val vSpans = getSpans(h, n, ratios)
        return expand(hSpans, vSpans)
    }

    fun expand(hSpans: List<Span>, vSpans: List<Span>) : List<LRect> {
        val panes = ArrayList<LRect>()
        for (h in hSpans) {
            for (v in vSpans) {
                panes.add(LRect(h.from, v.from, h.size(), v.size()))
            }
        }
        return panes
    }

    fun getSpans(total: Double, n: Int, ratios: ArrayList<Double> = ArrayList<Double>() ): List<Span> {

        if (ratios.isEmpty())
            (1 .. n).forEach { ratios.add(1.0 / n.toDouble()) }

        val spans = ArrayList<Span>()
        val padTotal = padding * (n + 1)
        val remaining = 1.0 - padTotal

        var cur = 0.0
        for (i in 0 until n) {
            // add padding in each timee
            cur += padding * total

            val sp = ratios[i] * total * remaining
            spans.add(Span(cur, cur+sp))

            cur += sp
        }



        return spans
    }

}

class LayoutTest : XApp {


    override fun paint(xg: XGraphics) {
        TODO("Not yet implemented")
    }

    override fun handleMouseEvent(e: XMouseEvent) {
        TODO("Not yet implemented")
    }

    override fun handleKeyEvent(e: XKeyEvent) {
        TODO("Not yet implemented")
    }

}


