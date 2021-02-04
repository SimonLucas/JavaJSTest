package test.math

import draw.GeomUtil
import draw.RLine
import draw.VoronoiModel
import math.Vec2d


fun main() {
    TestGeom().testVoronoi()
}

class TestGeom {

    fun testVoronoi() {
        val o = Vec2d()
        val p = Vec2d(20.0, 10.0)
        val q = Vec2d( 15.0,1.0)
        val r = Vec2d(5.0, 9.0)

        val points = arrayListOf<Vec2d>(q)

        val vm = VoronoiModel(points, o, p)

        println(vm.cPolys)

    }


    fun testLineIntercepts() {
        val o = Vec2d()
        val a = Vec2d(0.0, 1.0)
        val b = Vec2d(1.0, 0.0)
        val c = Vec2d(2.0, 0.5)

        val l1 = RLine(a, b-a, 5.0)
        val l2 = RLine(b, (c-b), 5.0)
        val l3 = RLine(c, a+b, 5.0)

        val xAxis = RLine(o, b, 10.0)
        val yAxis = RLine(o, a, 10.0)

        println(GeomUtil().intercept(l1, l2))
        println(GeomUtil().intercept(l2, l1))
        println(GeomUtil().intercept(l1, l3))
        println(GeomUtil().intercept(l3, l2))

        println(GeomUtil().mirrorPoint(c, xAxis))
        println(GeomUtil().mirrorPoint(c, yAxis))



    }


}