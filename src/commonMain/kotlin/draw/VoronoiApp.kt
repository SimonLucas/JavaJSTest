package draw

import gui.*
import math.Mat2d
import math.Vec2d
import util.Picker
import kotlin.math.PI
import kotlin.math.min
import kotlin.random.Random

class VoronoiApp(var n: Int = 1) : XApp {

    var centre = Vec2d()
    // the core random set of points
    val points = ArrayList<Vec2d>()
    // points transformed - recomputed at each resize
    val tPoints = ArrayList<Vec2d>()
    val xPolys = ArrayList<XPoly>()
    val rand = Random
    val pointRad = 0.02
    val xp = XPalette(n, seed=10L)

    var voronoiModel: VoronoiModel? = null

    init {
        randPoints()
    }

    fun randPoints() {
        points.clear()
        if (n == 1) {
            // treat as a special test case
            points.add(Vec2d(0.4, 0.6))
            return
        }
        repeat(n) {
            points.add(Vec2d(rand.nextDouble(), rand.nextDouble()))
        }
    }

    fun transformPoints(ps: ArrayList<Vec2d>, xg: XGraphics): ArrayList<Vec2d> {
        tPoints.clear()
        for (p in ps)
            tPoints.add(Vec2d(p.x * xg.width(), p.y * xg.height()))
        println("====== tPoints: $tPoints")
        return tPoints
    }

    fun getLines(ps: ArrayList<Vec2d>): ArrayList<RLine> {
        val lines = ArrayList<RLine>()
        // add in the bounding lines
        for (i in 0 until ps.size - 1) {
            for (j in (i + 1) until ps.size) {
                lines.add(GeomUtil().bisector(ps[i], ps[j]))
            }
        }
        // println(lines)
        return lines
    }

    fun compute(xg: XGraphics) {
        transformPoints(points, xg)
        voronoiModel = VoronoiModel(tPoints, Vec2d(0.0, 0.0), Vec2d(xg.width(), xg.height()))
        setPolys()
    }


    override fun paint(xg: XGraphics) {

        if (centre != xg.centre()) {
            centre = xg.centre()
            println("XG Centre: $centre")
            compute(xg)
        }

        xg.draw(XRect(xg.centre(), xg.width(), xg.height()))
        val size = min(xg.width(), xg.height())

        xPolys.forEach { xg.draw(it) }

        val dotSize = size * pointRad
        for ((ix, p) in tPoints.withIndex()) {
            val style = XStyle(fg = xp.getColor(ix), stroke = false)
            xg.draw(XEllipse(p, dotSize, dotSize, style))
        }
//        val lines = getLines(tPoints)
//        lines.forEach { xg.draw(it.getXLine()) }
//        for (i in lines) {
//            for (j in lines) {
//                GeomUtil().intercept(i, j)?.let {
//                    xg.draw(XEllipse(it, 2 * dotSize, 2 * dotSize))
//                }
//            }
//        }
    }

    private fun setPolys() {
        // create a list of temporary points so that we can add the
        // mirror points from the bounding rectangle lines
        xPolys.clear()
        val xp = XPalette(points.size)
        var ix = 0
        voronoiModel?.let {
            for (cPoly in it.cPolys) {
                val style = XStyle(fg = xp.getColor(ix++))
                xPolys.add(XPoly(cPoly.centre, cPoly.poly, style))
            }
        }
    }

}

