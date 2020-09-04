package games.subgoal

import gui.*
import gui.layout.Layout

interface SubgoalDemoControl {
    fun nSubgoals() : Int = 10
}

class DefaultDemoControl : SubgoalDemoControl

class SubgoalDemo (val control: SubgoalDemoControl = DefaultDemoControl()): XApp {

    val xp = XPalette()
    var viewApp: GridWorldView? = null
    // val message

    init {
        reset()
    }

    fun reset() {
        println("Resetting with ${control.nSubgoals()} subgoals")
        val gridWorld = SubGridWorld(Levels.noSubgoals)
        gridWorld.addRandomSubgoals(control.nSubgoals())

        val macro = MacroWorld(sub = gridWorld)
        val app = GridWorldView(gridWorld)
        val updater = DemoUpdater(app, macro, gridWorld)

        app.updater = updater
        viewApp = app
    }

    override fun paint(xg: XGraphics) {

        val layout = Layout(0.05)
        val panes = layout.vPartition(
            xg.width(), xg.height()
            , 2,
            arrayListOf(0.8, 0.2)
        )

        panes[0].app = viewApp
        panes[1].app = null

        // now draw everything

        var cIndex = 0
        val bgRect = XRect(
            xg.centre(), xg.width(), xg.height(),
            XStyle(fg = xp.colors[cIndex++])
        )
        xg.draw(bgRect)

        // draw each pane in a new color

        for (pane in panes) {
            val xRext = pane.XRect(XStyle(fg = xp.colors[cIndex++]))
            xg.draw(xRext)

            pane.app?.let {

                xg.setBounds(pane)
                it.paint(xg)
                xg.releaseBounds()
            }
            // now put the associated app in, if there is one
        }
    }

    override fun handleMouseEvent(e: XMouseEvent) {
    }

    override fun handleKeyEvent(e: XKeyEvent) {
    }

}

class DemoUpdater (val view: GridWorldView, val macro: MacroWorld, val gridWorld: SubGridWorld): Updater {

    var count = 0
    val paths = ArrayList<Path>()


    companion object {
        var skip = 50
    }



    override fun invoke() {
        count++
        if (count % skip == 0) {
            // resetPaths()
            macro.reset()
        } else {
            macro.explorePaths(1)
            // addRandomPaths()
        }
        view.paths = macro.allPaths()
        view.boldPaths = macro.bestPaths()
        view.graph = macro.graph
    }


    // todo: also need a way to build up the start points

    fun addRandomPaths() {
        val nPaths = 1
        (1..nPaths).forEach{ paths.add( macro.randomPath(gridWorld.startPosition()) ) }
        view.paths = paths
    }

    fun resetPaths() {
        paths.clear()
    }



}

