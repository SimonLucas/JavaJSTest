package games.arcade

import math.Vec2d

enum class MoveAction {Neutral, Left, Right, Up, Down, Fire, Jump}

// not sure where
enum class ObjectType {Avatar, P1Missile, AlienMissile, AlienObject}

open class GameObject (
    var s: Vec2d = Vec2d(),
    var v: Vec2d = Vec2d(),
    var alive: Boolean = true,
    var age: Int = 0
)

class GameLoop {

    var gameObjects: Map<ObjectType,List<GameObject>> = HashMap()

    var canCollide: Map<ObjectType, List<ObjectType>> = HashMap()

    fun update() {
        // the update loop

    }

}