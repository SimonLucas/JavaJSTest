package gui

import math.Vec2d
import kotlin.random.Random

// fun t() {}

class TreeRectApp : XApp {

    val tb = TreeBuilder(5, 0.7)
    var seed = 0L
    var palette = XPalette(nColors = 100)
    var strokeWidth = 5.0
    var updatePeriod = 50

    var n = 0

    override fun paint(xg: XGraphics) {
        // draw a rectangle using default style
        xg.draw(XRect(xg.centre(), xg.width(), xg.height()))
        val p1 = Vec2d(0.0, 0.0)
        val p2 = Vec2d(xg.width(), xg.height())

        val split = if (xg.width() > xg.height()) Split.V else Split.H
        TreeBuilder.rand = Random(seed)
        tb.build(p1, p2, split)

        // now draw them
        var nc = 0
        for (xr in tb.rects) {
            xr.dStyle = XStyle(stroke = strokeWidth > 0,
                lineWidth = strokeWidth, fg = palette.getColor(nc++), lc = XColor.black)
            xg.draw(xr)
        }


        // fresh image once in a while...
        n++
        if (n % updatePeriod == 0) {
            seed++
        }

    }

    override fun handleMouseEvent(e: XMouseEvent) {
        println(e.t)
        if (e.t == XMouseEventType.Down) {
            palette = XPalette(100, min = 0.0, max = 1.0, seed = seed++)
            // println("Updated pallete")
            n = 0
        }
    }

    override fun handleKeyEvent(e: XKeyEvent) {
        println("Key Event: $e")
        if (e.t == XKeyEventType.Pressed) {
            seed++
            n = 0
        }
    }
}

// a bit over-designed? - could have just used a Boolean or Int
// to indicate the current split direcction.
enum class Split {
    V {
        override fun flip() = H
    },
    H {
        override fun flip() = V
    };

    abstract fun flip(): Split

}

data class RectPair(val a: SplitRect, val b: SplitRect)

data class SplitRect(val leftUpper: Vec2d, val rightLower: Vec2d) {

    fun split(split: Split, ratio: Double): RectPair {
        if (split == Split.V) return splitVertically(ratio)
        else return splitHorizontally(ratio)
    }

    fun splitVertically(sp: Double): RectPair {
        val xSplit = leftUpper.x + sp * (rightLower.x - leftUpper.x)
        return RectPair(
            SplitRect(leftUpper, Vec2d(xSplit, rightLower.y)),
            SplitRect(Vec2d(xSplit, leftUpper.y), rightLower)
        )
    }

    fun splitHorizontally(sp: Double): RectPair {
        val ySplit = leftUpper.y + sp * (rightLower.y - leftUpper.y)
        return RectPair(
            SplitRect(leftUpper, Vec2d(rightLower.x, ySplit)),
            SplitRect(Vec2d(leftUpper.x, ySplit), rightLower)
        )
    }

    fun w() = rightLower.x - leftUpper.x
    fun h() = rightLower.y - leftUpper.y
    fun c() = Vec2d(leftUpper.x + w() / 2, leftUpper.y + h() / 2)
}

class TreeBuilder(var maxDepth: Int = 4, var splitProb: Double = 0.7, var splitBig: Boolean = false) {
    companion object {
        var rand = Random(1)
        val minSplit = 0.2
    }

    val rects = ArrayList<XRect>()

    fun build(leftUpper: Vec2d, rightLower: Vec2d, split: Split = Split.V) {
        rects.clear()
        rBuild(SplitRect(leftUpper, rightLower), 0, split)
    }

    fun rBuild(rect: SplitRect, depth: Int, split: Split) {
        if (depth >= maxDepth || rand.nextDouble() > splitProb) {
            // render the rectangle
            // println("Rendering $rect")
            rects.add(XRect(rect.c(), rect.w(), rect.h()))
        } else {
            // recurse with a random split
            val ratio = minSplit + (1.0 - 2 * minSplit) * rand.nextDouble()
            val pair = rect.split(split, ratio)

            val sp =
                if (splitBig) {
                    if (rect.w() > rect.h()) Split.H else Split.V
                } else
                    split.flip()

            rBuild(pair.a, depth + 1, sp)
            rBuild(pair.b, depth + 1, sp)
        }
    }
}
