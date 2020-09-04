package math

import kotlin.math.abs

fun iv(x: Int, y: Int) = IntVec2d(x,y)

data class IntVec2d(val x: Int = 0, val y: Int = 0) {
    operator fun plus(v: IntVec2d) = iv(x + v.x, y + v.y)
    operator fun unaryMinus() = iv(-x, -y)
    operator fun minus(v: IntVec2d) = iv(x - v.x, y - v.y)
    infix fun gridDistanceTo(v: IntVec2d) = abs(x - v.x) + abs(y - v.y)
    fun isInRect(topLeft: IntVec2d, size: IntVec2d) = (x >= topLeft.x) && (x <= topLeft.x + size.x) &&
            (y >= topLeft.y) && (y <= topLeft.y + size.y)
    fun toVec() = Vec2d(x.toDouble(),y.toDouble())
}
