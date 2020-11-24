package test

import gui.ColorGradientApp
import gui.XColor
import gui.XColorHeat
import test.launch.AppLauncher


fun main() {

    println(XColor.red)

    fun v(x: Float) = (255 * x).toInt()

    fun rgba(xColor: XColor): String {
        return "rgba(${v(xColor.r)}, ${v(xColor.g)}, ${v(xColor.b)}, ${xColor.a})"
    }

    println(rgba(XColor.red))

    val n = 11
    repeat (n) {
        println(XColorHeat().getColor( it.toDouble()/(n-1) ))
    }

    AppLauncher(ColorGradientApp(), 1).launch()

}

