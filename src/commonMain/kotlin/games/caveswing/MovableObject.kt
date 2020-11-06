package games.caveswing

import math.Vec2d

data class MovableObject(var s: Vec2d = Vec2d(), var v: Vec2d = Vec2d()) {

    fun update(resultantForce: Vec2d, lossFactor: Double): MovableObject {
        v += resultantForce
        s += v
        v *= lossFactor
        return this
    }

    override fun toString(): String {
        return "$s : $v"
    }

    fun copy(): MovableObject {
        return MovableObject(s.copy(), v.copy())
    }
}

