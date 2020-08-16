package games.caveswing

import math.Vec2d
import kotlin.random.Random

data class CaveSwingParams (
    // duration
    var maxTicks: Int = 1000,
    // forces
    var gravity: Vec2d = Vec2d(0.0, 0.4),
    var hooke: Double = 0.02,
    var lossFactor: Double = 0.9999,

    // game map params
    var width: Int = 1500,
    var height: Int = 350,
    var nAnchors: Int = 10,
    var gridScale : Int = 20,
    var meanAnchorHeight: Double = height * 0.4,

    // score related params
    var successBonus: Int = 1000,
    var failurePenalty: Int = 1000,
    var pointPerX: Int = 10,
    var pointPerY: Int = -10,
    var costPerTick: Int = 10,

    var sandpit:Double? = 0.9,

    var random: Random = Random.Default
)

