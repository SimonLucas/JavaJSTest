package test.caveswing

import games.caveswing.MovableObject
import math.Vec2d

fun main() {
    Test().testMoveable()
}

class Test() {
    fun testMoveable() {
        val ob = MovableObject()
        val f = Vec2d(1.0, 0.0)
        repeat(10) {
            ob.update(f, 1.0)
            println(ob)
        }
    }
}
