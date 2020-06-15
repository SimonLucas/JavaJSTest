package test.geometry

import gui.geometry.Poly
import math.Vec2d

fun main() {
    val points = arrayListOf<Vec2d>(
        Vec2d(0.0, 0.0),
        Vec2d(10.0, 0.0),
        Vec2d(0.0, 10.0)
    )

    for (i in -1 .. 6) {
        val p = Vec2d(i.toDouble(), 1.0 + i.toDouble())
        println("Contains $p : ${Poly().contains(p, points)}")
    }

}
