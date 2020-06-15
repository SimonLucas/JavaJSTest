package test.inheritance

import gui.Drawable
import math.Vec2d

// todo: give an example of best practice of how to specify inherited properties
// so that as little as possible neeeds to be done in each concrete class

// consider the rotation property that every drawable object must have

interface IDrawable {
    var rotation: Double


}

abstract class ADrawable(var rotation: Double=10.0) {

}

data class IRect (var c: Vec2d = Vec2d(), var w: Double = 10.0, var h: Double = 10.0, override var rotation:Double ): IDrawable {

    // cannot
//    override fun toString() : String {
//        super.rotation += 1.0
//        return "$rotation, ${super.rotation}"
//    }

}

class ARect (var c: Vec2d = Vec2d(), var w: Double = 10.0, var h: Double = 10.0, rotation:Double ): ADrawable(rotation) {
    override fun toString() : String {
        super.rotation += 1.0
        return "$rotation, ${super.rotation}"
    }

}

fun main() {
//    val rect = ARect(rotation = 5.0)
//    println(rect.rotation)
//
//    val ar: ADrawable = ARect(rotation = 99.0)
//
//    println(ar)

    val ir:IDrawable = IRect(rotation = 3.0)

    println(ir.rotation)
    ir.rotation++

    println(ir.rotation)

}
