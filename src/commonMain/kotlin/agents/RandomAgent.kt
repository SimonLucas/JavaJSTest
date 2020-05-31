package agents

import ggi.AbstractGameState
import ggi.SimplePlayerInterface
import kotlin.random.Random

class RandomAgent (val seed: Long = -1): SimplePlayerInterface {

    override fun getAgentType(): String {
        return "RandomAgent"
    }

    val random = Random

    init{
        // if (seed != -1L)
            // random.s
    }

    override fun getAction(gameState: AbstractGameState, playerId: Int): Int {
        return random.nextInt(gameState.nActions())
    }

    override fun reset(): SimplePlayerInterface {
        // do nothing
        return this
    }
}
