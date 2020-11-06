package ggi

interface SimplePlayerInterfaceMulti {
    fun getAction(gameState: AbstractGameStateMulti, playerId: Int) : Int
    fun reset() : SimplePlayerInterface
    fun getAgentType(): String
}
