package test.subgoal

import gui.layout.GridXYFilterLayout
import test.launch.AppLauncher

fun main() {

    // todo: record the path from the current state to each
    // position in the graph...

    val control = GridDemoControl(useHashSet = true)

    val transTest = TransitionModelTest(control).runModel(20, 100)
    AppLauncher(GridXYFilterLayout(
        transTest.getXYDataSource(),
        transTest.getXDataSource(),
        transTest.getYDataSource()
    )).launch()
}
