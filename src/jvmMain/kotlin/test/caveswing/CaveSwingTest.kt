package test.caveswing

import games.caveswing.CaveSwingApp
import games.caveswing.MovableObject
import math.Vec2d
import test.EasyComponent
import test.XGraphicsJVM
import test.XKeyAdapter
import test.XMouseAdapter
import test.launch.AppLauncher
import utilities.JEasyFrame

fun main() {
    AppLauncher(CaveSwingApp(), 40).launch()
}

//class Test() {
//    fun testMoveable() {
//        val ob = MovableObject()
//        val f = Vec2d(1.0, 0.0)
//        repeat(10) {
//            ob.update(f, 1.0)
//            println(ob)
//        }
//    }
//}
