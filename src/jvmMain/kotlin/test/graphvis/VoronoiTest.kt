package test.graphvis

import draw.VoronoiApp
import test.launch.AppLauncher

fun main() {
    AppLauncher(VoronoiApp(n=10)).launch()
}
