package graph

import gui.*
import math.Vec2d
import kotlin.math.PI
import kotlin.math.max
import kotlin.math.min
import kotlin.random.Random

typealias IntGraph = HashMap<Int,HashSet<Int>>

class GraphDrawApp (val g: IntGraph = GraphMaker().gilbert(),
                    var drawCurves: Boolean = true,
                    var lineWeight: Double = 0.01,
                    var centrePull: Double = 0.5,

) : XApp {
    override fun paint(xg: XGraphics) {
        // background
        xg.draw(XRect(xg.centre(), xg.width(), xg.height()))

        // now draw them
        val rad = min(xg.width(), xg.height()) / 2
        val nodeRad = rad * 0.05
        val xp = XPalette()
        val lineWidth = lineWeight * rad
        val lineStyle = XStyle(lineWidth = max(lineWeight * rad, 2.0))

        val nodePos = HashMap<Int,Vec2d>()

        // draw the nodes
        repeat(g.size) {
            val theta = it * 2 * PI / g.size
            val s = xg.centre() + Vec2d.polar(rad, theta)
            nodePos[it] = s
            xg.draw(XEllipse(s, nodeRad, nodeRad, XStyle(fg = xp.getColor(it))))
        }

        // draw the connecctions
        for ((from,links) in g) {
            for (to in links) {
                if (drawCurves) {
                    val mid = (nodePos[from]!! + xg.centre() * centrePull + nodePos[to]!!) * (1.0 / (2 + centrePull))
                    // val mid = xg.centre()
                    xg.draw(XQuadCurve(nodePos[from]!!, mid, nodePos[to]!!, dStyle = lineStyle))
                }
                else
                    xg.draw(XLine(nodePos[from]!!, nodePos[to]!!, lineStyle))
            }
        }
    }
}

class GraphMaker() {
    val rand = Random
    fun gilbert(n: Int = 100, p: Double = 0.02) : IntGraph {
        val g = IntGraph()
        // make the nodes
        repeat(n) { g[it] = HashSet() }
        // now add random nodes
        repeat((n*n*p).toInt()) {
            val from = rand.nextInt(n)
            val to = rand.nextInt(n)
            var hs = g[from]
            if (hs == null) {
                hs = HashSet()
                g[from] = hs
            }
            hs.add(to)
        }
        return g
    }
}