package test

import gui.XColor


fun main() {

    println(XColor.red)

    fun v(x: Float) = (255 * x).toInt()

    fun rgba(xColor: XColor): String {
        return "rgba(${v(xColor.r)}, ${v(xColor.g)}, ${v(xColor.b)}, ${xColor.a})"
    }


    println(rgba(XColor.red))

}

