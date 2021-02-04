package draw

import gui.XGraphics
import gui.XPoly
import gui.XStyle
import math.Vec2d
import util.Picker

data class CPoly(val centre: Vec2d, val poly:Poly)

class VoronoiModel (val points: ArrayList<Vec2d>, val topLeft: Vec2d, val bottomRight: Vec2d) {
    val epsilon = 1.0
    val bounds = ArrayList<RLine>()
    val cPolys = ArrayList<CPoly>()

    init {
        setBounds()
        computePolys()
    }

    private fun setBounds() {
        bounds.clear()
        val a = topLeft
        val b = Vec2d(bottomRight.x, topLeft.y)
        val c = bottomRight
        val d = Vec2d(topLeft.x, bottomRight.y)
        bounds.add(easyLine(a, b))
        bounds.add(easyLine(b, c))
        bounds.add(easyLine(c, d))
        bounds.add(easyLine(d, a))
        println("Made bounds: ")
        bounds.forEach { println("    -> $it") }
        // todo: add in the rest of them, ideally using a helper
    }

    private fun computePolys() {
        cPolys.clear()
        for (p in points) {
            val tp = ArrayList<Vec2d>()
            tp.addAll(points)
            for (line in bounds) {
                GeomUtil().mirrorPoint(p, line)?.let { tp.add(it) }
            }
            cPolys.add(getPoly(p, tp))
        }
    }

    fun getPoly(p: Vec2d, points: ArrayList<Vec2d>): CPoly {
        println("For $p, considering ${points.size} points: $points")
        val poly = Poly()
        // now for each other point, find the closest point
        // in that direction, and add it to a set of points
        val pointSet = HashSet<Vec2d>()
        // consider all other points op
        for (other in points) {
            // skip if it's the same as the current point
            if (p != other) {
                val dir = (other - p).normalized
                // find the closest point in this direction by evaluation
                // the scalar products of the difference vectors for each point
                val picker = Picker<Vec2d>(Picker.MIN_FIRST)
                for (cp in points) {
                    if (cp != p) {
                        val dotProd = dir.sp(cp-p)
                        if (dotProd > epsilon) picker.add(dotProd, cp)
                    }
                }
                picker.best?.let { pointSet.add(it) }
            }
        }
        // we now have the set of closest points, but need them in a list ordered by angle
        // treating the current point as the origin
        // to do this we'll put them in a map
        val cpList = ArrayList<Vec2d>()
        cpList.addAll(pointSet)
        println("----- Added ${pointSet.size} points from SET")
        cpList.sortWith { a, b ->
            p.angleTo(a).compareTo(p.angleTo(b))
        }
        cpList.forEach { println("    ---->   $it") }

        // good to go, now create the intersection points
        with(GeomUtil()) {
            for (i in 0 until cpList.size) {
                intercept(
                    bisector(p, cpList[i]),
                    bisector(p, cpList[(i+1)%cpList.size])
                )?.let { poly.add(it) }
            }
        }

        println("For $p")
        poly.forEach { println("  ->   $it") }
        println()

        // CPoly is not actually needed, would be wrong to translate to central point
        return CPoly(Vec2d(), poly)
    }


}

private fun easyLine(a: Vec2d, b: Vec2d) = RLine((a + b) * 0.5, (b - a).normalized, a.distanceTo(b))

