package draw

import gui.XLine
import math.Mat2d
import math.Vec2d
import kotlin.math.PI

typealias Poly = ArrayList<Vec2d>

class GeomUtil {
    fun bisector(a: Vec2d, b: Vec2d): RLine {
        val mid = (a + b) * 0.5
        // to get perpendicular rotate by PI/2
        val v = (b - a).normalized.rotatedBy(PI * 0.5)
        val len = 200.0 // a.distanceTo(b)
        return RLine(mid, v, len)
    }

    fun intercept(l1: RLine, l2: RLine): Vec2d? {
        // check if the lines ar parallel and return null if so
        if (l1.v == l2.v) return null
        // otherwise work out the intercept point

        val mat = Mat2d(l1.v.x, -l2.v.x, l1.v.y, -l2.v.y)
        val inv = mat.inverse() ?: return null

        val diffVec = Vec2d(l2.s.x - l1.s.x, l2.s.y - l1.s.y)

        val ab = inv * diffVec
        return l1.s + l1.v * ab.x
    }

    fun closestPointOnLine(p: Vec2d, line: RLine): Vec2d? {
        val normal = RLine(p, line.v.rotatedBy(PI * 0.5), 1.0)
        return intercept(normal, line)
    }

    fun mirrorPoint(p: Vec2d, line: RLine): Vec2d? {
        val q = closestPointOnLine(p, line) ?: return null
        return p + (q - p) * 2.0
    }
}

data class RLine(val s: Vec2d, val v: Vec2d, val len: Double) {
    fun getXLine(): XLine {
        val a = s + v * (0.5 * len)
        val b = s - v * (0.5 * len)
        return XLine(a, b)
    }
}

