package games.caveswing

import gui.*
import gui.layout.Layout
import plot.EasyGraphPlot

class CaveSwingLayoutDemo : XApp {
    val plotApp: EasyGraphPlot = EasyGraphPlot()
    val caveSwing: CaveSwingApp = CaveSwingApp()
    val xp = XPalette(seed = 2)


    override fun paint(xg: XGraphics) {
        val layout = Layout(0.05)
        val panes = layout.vPartition(
            xg.width(), xg.height(), 2,
            arrayListOf(0.7, 0.3)
        )

        panes[0].app = caveSwing
        panes[1].app = plotApp

//        plotApp.setData(caveSwing.getData())

        var cIndex = 0
        val bgRect = XRect(
            xg.centre(), xg.width(), xg.height(),
            XStyle(fg = xp.colors[cIndex++])
        )
        xg.draw(bgRect)

        for (pane in panes) {
            val xRext = pane.XRect(XStyle(fg = xp.colors[cIndex++]))
            xg.draw(xRext)

            pane.app?.let {
//                xg.setBounds(pane)
                it.paint(xg)
//                xg.releaseBounds()
            }
        }
    }
}