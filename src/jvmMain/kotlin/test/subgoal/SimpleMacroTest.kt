package test.subgoal

import agents.MctsAgent
import agents.PolicyEvoAgent
import agents.RandomAgent
import agents.SimpleEvoAgent
import games.subgoal.*
import ggi.AbstractGameState
import ggi.ExtendedAbstractGameState
import ggi.SimplePlayerInterface
import math.IntVec2d
import util.ElapsedTimer
import util.StatSummary
import kotlin.random.Random

fun main() {

    val grid = SubGridWorld(Levels.noSubgoals)
    grid.addRandomSubgoals(5)

    val macroWorld = MacroWorld(node = grid.startPosition(), sub = grid)
    macroWorld.makeMacros(100)
    // println(macroWorld.graph.g)
    println("Start postion: ${grid.startPosition()}")
    macroWorld.graph.print()

    println("Running tests")
    // val tester = TestMacroAgent(RandomAgent())
    // val tester = TestMacroAgent(MctsAgent())
    // val tester = TestMacroAgent(PolicyEvoAgent())
    val simpleEvo = TestMacroAgent(SimpleEvoAgent(totallyRandomMutations = false, nEvals = 50, sequenceLength = 20))

    val tester = simpleEvo

    val t = utilities.ElapsedTimer()
    val nRuns = 10
    val itsPerRun = 100
    val ss = StatSummary()
    for (i in 0 until nRuns) {
        val model = macroWorld.copy() as MacroWorld
        model.makeMacros(5000)
        val trialStats = StatSummary()
        for (j in 0 until itsPerRun) {
//            val model = macroWorld.copy() as MacroWorld
//            model.makeMacros(1000)
//            trialStats.add(tester.runTest(model as MacroWorld))
            trialStats.add(tester.runTest(model.copy() as MacroWorld))
        }
        ss.add(trialStats.max())
    }

    println("Total subgoals = ${grid.subgoals.size}" )
    println(ss)
    println(t)

}
