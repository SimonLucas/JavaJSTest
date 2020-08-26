package test.subgoal

import games.subgoal.*
import test.EasyComponent
import test.XGraphicsJVM
import utilities.JEasyFrame

fun main() {
//    val gridWorld = SubGridWorld(Levels.midroom)

    val n = 5

    val gridWorld = SubGridWorld(Levels.noSubgoals)
    gridWorld.addRandomSubgoals(n)

    val ec = EasyComponent()
    val frame = JEasyFrame(ec, "$n random subgoals")
    val xg = XGraphicsJVM(ec)
    ec.xg = xg

    val macro = MacroWorld(sub = gridWorld)
    val viewApp = GridWorldView(gridWorld)
    val updater = DemoUpdater(viewApp, macro, gridWorld)

    viewApp.updater = updater

    ec.xApp = viewApp
    // frame.addKeyListener(XKeyAdapter(game))
    val frameRate = 10
    val delay = 1000 / frameRate
    while (true) {
        ec.repaint()
        Thread.sleep(delay.toLong())
    }
}

class DemoUpdater (val view: GridWorldView, val macro: MacroWorld, val gridWorld: SubGridWorld): Updater {

    companion object {
        var count = 0
        var skip = 10
    }

    override fun invoke() {
        count++
        if (count % skip == 0) {
            val paths = ArrayList<Path>()
            val nPaths = 20
            (1..nPaths).forEach{ paths.add( macro.randomPath(gridWorld.startPosition()) ) }
            view.paths = paths
        }
    }
}

