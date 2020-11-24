package test.subgoal

import games.subgoal.*
import test.EasyComponent
import test.XGraphicsJVM
import test.launch.AppLauncher
import utilities.JEasyFrame

fun main() {
    val app = SubgoalDemo(DefaultDemoControl())
    AppLauncher(app, 20).launch()
}
