package games.arcade

import agents.SimpleEvoAgent
import ggi.SimplePlayerInterface
import gui.*
import math.Vec2d


interface RolloutDataSource {
    fun getData(): List<DoubleArray>?

}

class ArcadeTestApp : XApp, RolloutDataSource {
    var mousePosition: Vec2d? = null
    var game: AsteroidsGame? = null
    var controller = AsteroidsKeyController()

    var agent: SimplePlayerInterface? = SimpleEvoAgent(
        nEvals = 20,
        sequenceLength = 100, probMutation = 0.2, discountFactor = 0.98
    )

    init {
        agent = null
        // agent = PolicyEvoAgent()
    }

    override fun getData(): List<DoubleArray>? =
        if (agent is RolloutDataSource)
            (agent as RolloutDataSource?)?.getData()
        else null

    override fun paint(xg: XGraphics) {
        if (game == null) game = AsteroidsGame(xg.width(), xg.height())
        val safe = game?.copy() as AsteroidsGame
        if (safe == null) return

        val actionAI =
            if (agent != null && game != null)
                agent?.getAction(game!!, 0)
            else null


        if (actionAI == null) {
            safe.next(controller.getAction(safe, 0))
        } else {
            safe.next(intArrayOf(actionAI))
        }

        // now for drawing, make a copy of the state first
        val gobs = safe.gameObjects()
        val bgstyle = XStyle(fg = XColor.black)
        xg.draw(XRect(xg.centre(), xg.width(), xg.height(), bgstyle))
        gobs.forEach { xg.draw(it.geometry) }
        xg.draw(statusText(xg))
        game = safe

    }

    private fun statusText(xg: XGraphics): Drawable {
        val rocks = game?.countRocks() ?: 0
        val avatar = game?.avatarStatus()
        val str = "Score: ${game?.intScore}, [$avatar, $rocks, ${game?.nTicks()}]"
        val text = XText(
            str, Vec2d(xg.width() / 2, xg.height() / 20)
        )
        return text
    }

    override fun handleMouseEvent(e: XMouseEvent) {
        // println(e)
        mousePosition = e.s
    }

    override fun handleKeyEvent(e: XKeyEvent) {
        // need a standard keymap approach here
        controller.handleKeyEvent(e)
    }

}
