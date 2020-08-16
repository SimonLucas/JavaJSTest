package gui.layout

import agents.MctsAgent
import agents.PolicyEvoAgent
import agents.RandomAgent
import agents.SimpleEvoAgent
import games.arcade.ArcadeTestApp
import games.arcade.SpriteEngineApp
import gui.*

class LayoutTest : XApp {

    // just pop a sample layout here for now
    val plotApp: EasyGraphPlot = EasyGraphPlot()
    // val arcade = ArcadeTestApp()
    val arcade = SpriteEngineApp()
    // val aarcade
    val xp = XPalette(seed = 1)

    init {
        arcade.agent = PolicyEvoAgent(nEvals = 50, sequenceLength = 50, probMutation = 0.20,
            useMutationTransducer = true, discountFactor = 0.99, useShiftBuffer = true)
        // arcade.agent = RandomAgent()
        // arcade.agent = MctsAgent(rolloutLength = 50, nPlayouts = 50)

    }

    override fun paint(xg: XGraphics) {

        val layout = Layout(0.05)
        val panes = layout.vPartition(
            xg.width(), xg.height()
            , 2,
            arrayListOf(0.7, 0.3)
        )

        panes[0].app = arcade
        panes[1].app = plotApp

        plotApp.setData(arcade.getData())

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
        // need to work out how to translate these into the individual apps
    }

    override fun handleKeyEvent(e: XKeyEvent) {
        arcade.handleKeyEvent(e)
    }

}
