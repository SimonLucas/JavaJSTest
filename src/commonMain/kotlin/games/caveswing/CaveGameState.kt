package games.caveswing

import ggi.AbstractGameState
import ggi.ExtendedAbstractGameState
import math.Vec2d
import kotlin.math.floor

enum class CaveActions { Release, Attach }

class CaveGameState : ExtendedAbstractGameState {
    override fun randomInitialState(): AbstractGameState {
        println("Resetting after score of ${score()}")
        state = CaveGameInternalState(params = state.params)
        return this
    }

    override fun resetTotalTicks() {
        totalTicks = 0
    }

    companion object {
        var totalTicks: Long = 0
    }

    override fun totalTicks(): Long {
        return totalTicks
    }

    override fun nTicks(): Int {
        return state.nTicks
    }

    var state = CaveGameInternalState()

    // reward increasing x-position
    // reward a high Y- position
    // punish use of game ticks (i.e. want to get there as quickly as possible
    // it's important that nTicks is not incremented after the game is over
    // add in success bonus

    override fun score(): Double {
        with(state) {
            var score: Double =
                avatar.s.x * params.pointPerX +
                        avatar.s.y * params.pointPerY -
                        nTicks * params.costPerTick
            if (avatar.s.x >= params.width) {
                score += params.successBonus
            }
            if (avatar.s.y < 0 || avatar.s.y >= params.height) {
                score -= params.failurePenalty
            }
            score += bonusScore
            return floor(score)
        }
    }

    // if already over, then return quickly
    // now test for game over
    override fun isTerminal(): Boolean {
        with(state) {
            if (gameOver) return gameOver
            if (nTicks >= params.maxTicks || !map.bounds.contains(avatar.s)) {
                gameOver = true
            }
            return gameOver
        }
    }

    fun setup(params: CaveSwingParams = this.state.params): CaveGameState {
        with(state)
        {
            map = CaveMap().setup(params)
            var s = Vec2d(params.width.toDouble() / 10, params.height.toDouble() / 2)
            avatar = MovableObject(s, Vec2d())
        }
        return this
    }

    override fun copy(): AbstractGameState {
        val cp = CaveGameState()
        cp.state = state.deepCopy()
        return cp
    }

    fun collision(state: CaveGameInternalState) {
        val x = (state.avatar.s.x / state.params.gridScale).toInt()
        val y = (state.avatar.s.y / state.params.gridScale).toInt()
        val item = state.map.items.get(ItemPosition(x, y))
        if (item != null) {
            // println(item.alive)
            item.applyEffect(state)
            // println(state.bonusScore)
        }
    }

    override fun next(actions: IntArray): AbstractGameState {
        // the array of actions is to allow for a multi-player game
        // quick return if game over
        if (isTerminal()) return this

        with(state) {

            collision(state)

            // otherwise let's calculate the updates
            val action = actions[0]
            var resultantForce = params.gravity

            // now will it be to attach or to release?
            if (action == CaveActions.Attach.ordinal) {
                if (currentAnchor == null) {
                    // if already attached, do nothing
                    // if not yet attached, attach to the next one if available
                    // currentAnchor = map.getAnchor(nextAnchorIndex);
                    currentAnchor = map.getClosestAnchor(avatar.s)
                    if (currentAnchor != null) {
                        // nextAnchorIndex++;
                    }
                }
                // now if there is an anchor, apply the necessary force
                //
                currentAnchor?.let {
                    val tension = (it - avatar.s) * params.hooke
                    resultantForce += tension
                }
            } else if (action == CaveActions.Release.ordinal) {
                currentAnchor = null
            }
            avatar.update(resultantForce, params.lossFactor)
            nTicks++
        }

        totalTicks++
        return this

    }

    override fun nActions(): Int {
        return CaveActions.values().size
    }
}
