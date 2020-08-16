package games.arcade

import agents.SimpleEvoAgent
import ggi.SimplePlayerInterface
import gui.*
import math.Vec2d

class SpriteEngineApp : XApp, RolloutDataSource {
    var mp: Vec2d? = null
    var game: SpriteGame? = null
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

        if (game == null) {
            game = SampleSpriteGame(xg.width(), xg.height()).asteroids()
            println("Made new game: " + game)
        }
        val safe = game?.copy() as SpriteGame
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
        val bgstyle = XStyle(fg = XColor.black)
        xg.draw(XRect(xg.centre(), xg.width(), xg.height(), bgstyle))
        safe.sprites.forEach { xg.draw(it.data().geom) }
        // println()
        xg.draw(statusText(xg))
        game = safe
    }

    private fun statusText(xg: XGraphics): Drawable {
        val rocks = game?.sprites?.size ?: 0
        // val avatar = game?.avatarStatus()
        val avatar = "N/A"
        val str = "Score: ${game?.scoreX?.toInt()}, [$avatar, $rocks, ${game?.nTicks()}]"
        val text = XText(
            str, Vec2d(xg.width() / 2, xg.height() / 20)
        )
        return text
    }

    override fun handleMouseEvent(e: XMouseEvent) {
        // println(e)
        mp = e.s
    }

    override fun handleKeyEvent(e: XKeyEvent) {
        // need a standard keymap approach here
        controller.handleKeyEvent(e)
    }
}
