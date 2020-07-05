package test

import agents.MctsAgent
import games.maxgame.MaxGame

fun main(args: Array<String>) {

    var game = MaxGame(n=20)
    // val agent = SimpleEvoAgent(useMutationTransducer = false, sequenceLength = 20, nEvals = 5, useShiftBuffer = false)
    val agent = MctsAgent(k=2.0)
    val playerId = 0
    // get it to play the game
    var nSteps = 1
    while (!game.isTerminal() && nSteps-- >0) {
        // take an action
        println("Size = " + agent.root.size())
        var action = agent.getAction(game.copy(), playerId)
        println("Size = " + agent.root.size())
        // action = 100
        // println(Arrays.toString(agent.buffer))
        println("Action: ${action}")
        game.next(intArrayOf(action))
    }
    println(game)
    println(game.copy())
    println("Final score = " + game.score)
    println("Total ticks = ${game.totalTicks()}")

    println("Root id: " + agent.root)
    for ((action, node) in agent.root.actions) {
        println("$action -> ${node}")
    }
    agent.root.report()

}
