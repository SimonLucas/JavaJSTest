package test.subgoal

import gui.layout.GridXYFilterLayout
import test.launch.AppLauncher

fun main() {
    val transTest = TransitionModelTest(explore = false).runModel(10, 200)
    AppLauncher(GridXYFilterLayout(
        transTest.getXYDataSource(),
        transTest.getXDataSource(),
        transTest.getYDataSource()
    )).launch()

}
