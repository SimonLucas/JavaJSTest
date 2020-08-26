package test.subgoal

import games.subgoal.*
import games.tetris.TetrisModel
import gui.layout.TetrisDemoLayout
import test.EasyComponent
import test.XGraphicsJVM
import test.XKeyAdapter
import utilities.JEasyFrame

fun main() {
//    val gridWorld = SubGridWorld(Levels.midroom)

    val n = 5

    val gridWorld = SubGridWorld(Levels.noSubgoals)
    gridWorld.addRandomSubgoals(n)

    val paths = ArrayList<Path>()
    val nPaths = 20

    val macro = MacroWorld(sub = gridWorld)
    (1..nPaths).forEach{ paths.add( macro.randomPath(gridWorld.startPosition()) ) }


    val ec = EasyComponent()
    val frame = JEasyFrame(ec, "$n random subgoals")
    val xg = XGraphicsJVM(ec)
    ec.xg = xg

    val viewApp = GridWorldView(gridWorld, SampleUpdater())

    viewApp.paths = paths

    ec.xApp = viewApp
    // frame.addKeyListener(XKeyAdapter(game))
    val frameRate = 10
    val delay = 1000 / frameRate
    while (true) {
        ec.repaint()
        Thread.sleep(delay.toLong())
    }

}

class SampleUpdater : Updater {
    companion object {
        var count = 0
    }
    override fun invoke() {

        println("Invoking: ${count++}" )

    }

}