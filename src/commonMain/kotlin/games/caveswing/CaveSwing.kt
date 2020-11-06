package games.caveswing

import gui.XRect
import math.Vec2d
import util.Picker

class CaveMap {
    var anchors = ArrayList<Vec2d>()
    val items = hashMapOf<ItemPosition,Item>(
        ItemPosition(10, 5) to Fruit(),
        ItemPosition(20, 7) to Bomb()
    )

    // make something up for now
    var bounds = XRect(Vec2d(), 100.0, 100.0)

    fun getAnchor(index: Int): Vec2d? {
        return if (index < anchors.size) {
            anchors[index]
        } else {
            null
        }
    }

    // could replace this with a single line
    fun getClosestAnchor(s: Vec2d): Vec2d? {
        val picker = Picker<Vec2d>(Picker.MIN_FIRST)
        for (a in anchors) {
            picker.add(a.distanceTo(s), a)
        }
        return picker.best
    }

    fun setBounds(width: Double, height: Double): CaveMap {
        bounds = XRect(Vec2d(width/2, height/2), width, height)
        return this
    }

    fun setAnchors(nAnchors: Int, meanHeight: Double): CaveMap {
        anchors = ArrayList()
        val gap = bounds.w / (nAnchors + 1)
        var x = gap / 2
        for (i in 0 until nAnchors) {
            val s = Vec2d(x, meanHeight)
            anchors.add(s)
            x += gap
        }
        return this
    }

    fun setup(params: CaveSwingParams): CaveMap {
        setBounds(params.width.toDouble(), params.height.toDouble())
        setAnchors(params.nAnchors, params.meanAnchorHeight)
        return this
    }
}

data class ItemPosition(val x:Int, val y : Int)

abstract class Item {
    var alive: Boolean = true
    abstract fun applyEffect(state: CaveGameInternalState)
}

class Fruit : Item() {

    override fun applyEffect(state: CaveGameInternalState) {

        // do it dirty for now
        if (alive) {
            state.bonusScore += 5000
            alive = false
        }


    }
}

class Bomb : Item() {
    override fun applyEffect(state: CaveGameInternalState) {

        if (alive) {
            state.bonusScore -= 5000
            alive = false
        }

    }
}


data class CaveGameInternalState (
    var params: CaveSwingParams = CaveSwingParams(),
    var map: CaveMap = CaveMap().setup(params),
    // var nextAnchorIndex: Int = 0,
    var nTicks: Int = 0,
    var avatar: MovableObject = MovableObject(),
    var gameOver: Boolean = false,
    var currentAnchor: Vec2d? = null,
    var bonusScore: Int = 0
) {
    fun deepCopy() : CaveGameInternalState {
        val cgs = CaveGameInternalState()
        // shallow copy the map and the current Anchor
        // deep copy the avatar and the params
        cgs.avatar = avatar.copy()
        cgs.params = params.copy()

        // shallow copy the other ones
        cgs.map = map
        cgs.currentAnchor = currentAnchor
        cgs.nTicks = nTicks
        cgs.gameOver = gameOver
        cgs.bonusScore = bonusScore
        return cgs
    }

}
