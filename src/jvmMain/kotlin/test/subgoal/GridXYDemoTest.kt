package test.subgoal

import gui.layout.GridXYFilterLayout
import test.launch.AppLauncher

fun main() {

    // todo: record the path from the current state to each
    // position in the graph...

    // todo: this experiment control is currently ignored, apart from useHashset flag
    val control = GridDemoControl(useHashSet = true, useXYFilter = false, useRTHetaFilter = false)

    val transTest = TransitionModelTest(control).runModel(20, 100)
    AppLauncher(GridXYFilterLayout(
        transTest.getXYDataSource(),
        transTest.getXDataSource(),
        transTest.getYDataSource()
    )).launch()
}
