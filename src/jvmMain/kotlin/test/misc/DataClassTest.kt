package test.misc

import math.Vec2d

fun main() {
    val ob1 = MyOb()
    val ob2 = MyOb()
    val ob3 = ob1.copy()
    val ob4 = ob3.update()

    println(ob1 == ob2)
    println(ob2 == ob3)
    println(ob3 == ob4)
    println(ob4)
}

data class MyOb (val s: Vec2d = Vec2d(), val v:Vec2d = Vec2d(1.0, 0.0)) {
    fun update() = MyOb(s+v, v)
}

data class RotOb (val rot:Double = 0.0, val ob: MyOb = MyOb()) {
    fun update() = RotOb(rot + 1, ob.update())
}
