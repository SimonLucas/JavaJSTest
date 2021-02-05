package test.subgoal

import agents.RandomAgent
import ggi.AbstractGameState
import ggi.SimplePlayerInterface
import javax.naming.ldap.Control
import kotlin.collections.ArrayList
import kotlin.collections.HashSet
import kotlin.random.Random



class GraphLearner(val filters: ArrayList<StateFilter>, var control: GridDemoControl) {
    val models = ArrayList<FilterTransitionModel>()
    var agent: SimplePlayerInterface = RandomAgent()

    var states: MutableCollection<AbstractGameState> = ArrayList()

    init {
        for (f in filters) {
            models.add(FilterTransitionModel(f, control))
        }
        if (control.exploringAgent) {
            agent = ActionExplorerAgent(models)
            println(agent)
        }
        if (control.useHashSet) {
            states = HashSet()
        }
        println("States collection: $states  is Hashset? ${states is HashSet}")
    }


    fun gatherStats(state: AbstractGameState, seqLen: Int) {
        recordVisit(state)
        for (i in 0 until seqLen) {
            val chosen: AbstractGameState? = leastVisited()?.copy()
            println("Selected $chosen")
            if (chosen != null) {
                // we're visiting the selected state, and the state we transition to
                recordVisit(chosen)
                val action = agent.getAction(chosen, 0)
                chosen.next(intArrayOf(action))
                recordTransition(action, chosen)
                recordVisit(chosen)
            }
        }
    }

    private fun leastVisited(): AbstractGameState? {

        // remember this will be least visited according the the state filter visit counts
        // but a problem is that they all have different granularities
        // so do it separately for each filter model
        // and for now choose one at random

        // todo: make the experimental setup easier to select the various models



        var ix =  Random.nextInt(2) // Random.nextInt(models.size)
//         ix = Random.nextInt(models.size)
        var model = models[ix]
        // model = models[0]
        return model.leastVisited(states)
//        val rand = Random.nextInt(states.size)
//        println("Selecting state: $rand: ${states[rand]}")
//        if (states.size > 0) return states[rand]
//        else return null
    }

    private fun recordVisit(state: AbstractGameState) {
        // for now we can add the actual state, but strictly speaking this is not necessary
        // though it may be helpful
        // an alternative is to add the StateFilter key values here
        states.add(state.copy())
        for (m in models)
            m.recordVisit(state)
    }

    fun report() {
        for (m in models) {
            m.report()
        }
    }

    fun recordTransition(action: Any, next: AbstractGameState) {
        for (m in models)
            m.recordTransition(action, next)
    }
}
