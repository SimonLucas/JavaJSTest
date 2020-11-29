package gui.layout

import agents.MctsAgent
import agents.PolicyEvoAgent
import agents.RandomAgent
import agents.SimpleEvoAgent
import evo.GridDataSource
import evo.GridDataView
import evo.SimpleGridView
import games.arcade.ArcadeTestApp
import games.arcade.SpriteEngineApp
import gui.*

class GridXYFilterLayout(
    val gd: GridDataSource,
    val gx: GridDataSource? = null, val gy: GridDataSource? = null
) : XApp {

    init {

    }

    override fun paint(xg: XGraphics) {

        val layout = Layout(0.025)

        val colWidth = 1.0 / (1 + gd.nCols())
        val rowHeight = 1.0 / (1 + gd.nRows())

        val hSpans = layout.getSpans(
            xg.width(), 2,
            arrayListOf(1.0 - colWidth, colWidth)
        )

        val vSpans = layout.getSpans(
            xg.height(), 2,
            arrayListOf(1.0 - rowHeight, rowHeight)
        )

        val panes = layout.expand(hSpans, vSpans)

        val xp = XPalette()

        // now draw everything

        var cIndex = 0
        val bgRect = XRect(
            xg.centre(), xg.width(), xg.height(),
            XStyle(fg = xp.colors[cIndex++])
        )
        xg.draw(bgRect)

        // draw each pane in a new color

        panes[0].app = GridDataView(gd)
        if (gx != null) panes[1].app = GridDataView(gx)
        if (gy != null) panes[2].app = GridDataView(gy)

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
}
