package test.plot

import gui.layout.LayoutTest
import plot.GraphPlotter
import test.launch.AppLauncher
import kotlin.math.sqrt

fun main() {
    val gp = GraphPlotter()
    val n = 51
    val dn = (n-1).toDouble()
    val d1 = DoubleArray(n) { x -> x/dn}
    val d2 = DoubleArray(n) { x -> (x*x) / (dn*dn)}
    val d3 = DoubleArray(n) { x -> sqrt(x/dn )}
    gp.setData(arrayListOf(d1, d2, d3))
    AppLauncher(gp).launch()
}
