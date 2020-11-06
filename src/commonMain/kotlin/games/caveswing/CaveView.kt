package games.caveswing

import agents.random
import games.caveswing.CaveView.Companion.rand
import gui.*
import math.Vec2d
import util.Picker
import kotlin.math.sin
import kotlin.random.Random

typealias Playout = ArrayList<Int>

class CaveView () {
    var params: CaveSwingParams? = null
    var gameState: CaveGameState? = null
    var internalState: CaveGameInternalState? = null
    var bg = XColor.black
    var deadZone = XColor.gray
    var goalZone = XColor.green
    var finishZone = XColor(0.7f, 1f, 1f)
    var sandpit = XColor.yellow
    var nStars = 200
    var rad = 10
    var anchorColor = XColor.magenta
    var avatarColor = XColor.pink
    var fruitColor = XColor.green
    var scoreFontSize = 16
    var planetFontSize = 14
    // var scoreDraw: DrawUtil = DrawUtil().setColor(java.awt.Color.white).setFontSize(scoreFontSize)
    var scrollView = true
    var scrollWidth = 600
    var playouts = ArrayList<Playout>()
    var scale = 1.0
    val avatarStyle = XStyle(fg = avatarColor, stroke = false)
    val anchorPlain = XStyle(fg = anchorColor, stroke = false)
    val anchorSelected = XStyle(fg = XColor.white, lc = XColor.red, lineWidth = 2.0)

    fun setGameState(gameState: CaveGameState): CaveView {
        this.gameState = gameState
        internalState = gameState.state
        setParams(internalState!!.params)
        return this
    }

    fun setParams(params: CaveSwingParams?): CaveView {
        this.params = params
        setStars()
        return this
    }

    private fun setStars() {
        for (i in 0 until nStars) {
            // stars.add(Star())
        }
    }

    val title: String
        get() = internalState!!.nTicks.toString() + " : " + nPaints

    var nPaints = 0

    fun paintComponent(xg: XGraphics) {


        xg.draw(XRect(xg.centre(), xg.width(), xg.height()))

        val iState = internalState
        if (iState == null) return

        val xScroll = -iState.avatar.s.x + scrollWidth / 2
        if (scrollView) {
            // aha, need to cope with translating etc...
            // xg.translate(xScroll, 0.0)
        }
        paintStars(xg)
        paintZones(xg)
        paintAnchors(xg, iState.avatar.s, iState.map.anchors)
        paintAvatar(xg, iState.avatar.s, iState.currentAnchor)
        paintItems(xg)
        // drawPlayouts(xg)
        if (scrollView) {
            // g.translate(-xScroll, 0.0)
        }
        // have to paint the score last so that it is not obscured by any game objects
        // paintScore(xg)
        nPaints++
    }

    private fun paintAnchors(xg: XGraphics, avatar: Vec2d, anchors: ArrayList<Vec2d>) {
        val picker = Picker<Vec2d>(order = Picker.MIN_FIRST)
        anchors.forEach { picker.add(it.distanceTo(avatar), it) }
        val closest = picker.best

        // paint them all
        // get rid of consts later
        anchors.forEach {
            xg.draw(XEllipse(it, 10.0, 10.0, anchorPlain))
        }
        closest?.let { xg.draw(XEllipse(it, 10.0, 10.0, anchorSelected)) }
    }

    private fun paintItems(xg: XGraphics) {
//        g.setColor(java.awt.Color.white)
//        // int scale = internalState.getParams();
//        for (item in internalState!!.map.items.values()) {
//        }
    }

    private fun paintAvatar(xg: XGraphics, s: Vec2d, anchor: Vec2d?) {
        val disc = XEllipse(s, 10.0, 10.0, avatarStyle)
        xg.draw(disc)
        anchor?.let {
            xg.draw(XLine(s, it, ropeStyle))
        }
    }

//    private fun paintScore(g: Graphics2D) {
//        g.setColor(java.awt.Color.white)
//        val score = gameState!!.score().toInt()
//        val message: String = String.format("%d", score)
//        scoreDraw.centreString(g, message, getWidth() / 2, scoreFontSize)
//    }

//    private fun drawPlayouts(g: Graphics2D) {
//        try {
//            g.setColor(java.awt.Color(255, 0, 128, 100))
//            if (playouts != null) {
//                for (seq in playouts) {
//                    drawShipPlayout(g, gameState!!.copy() as CaveGameState, seq)
//                }
//            }
//        } catch (e: java.lang.Exception) {
//            e.printStackTrace()
//        }
//    }

//    private fun drawShipPlayout(g: Graphics2D, gameState: CaveGameState, seq: IntArray) {
//        g.setStroke(stroke)
//        val path: java.awt.geom.Path2D = java.awt.geom.Path2D.Double()
//        var pos: Vector2d = internalState!!.avatar.s
//        path.moveTo(pos.getX(), pos.getY())
//        val playerId = 0
//        for (a in seq) {
//            gameState.next(intArrayOf(a))
//            pos = internalState!!.avatar.s
//            path.lineTo(pos.getX(), pos.getY())
//        }
//        g.draw(path)
//    }

    var stars = ArrayList<Star>()

    private fun paintStars(xg: XGraphics) {
        for (star in stars) star.draw(xg)
    }

    private fun paintZones(xg: XGraphics) {
//        val (_, _, _, _, width, _, _, _, _, _, _, _, _, _, sandpit1) = internalState!!.params
//        g.setColor(deadZone)
//        g.fillRect(-zoneWidth, 0, zoneWidth, getHeight())
//        g.fillRect(0, 0, width, getHeight() / borderRatio)
//        g.fillRect(0, getHeight() - getHeight() / borderRatio, width, getHeight() / borderRatio)
//        g.setColor(finishZone)
//        g.fillRect(width, 0, zoneWidth, getHeight())
//        g.setColor(goalZone)
//        g.fillRect(width, 0, zoneWidth / goalRatio, getHeight() / goalRatio)
//        if (sandpit1 != 0.0) {
//            g.setColor(sandpit)
//            val xPit = (sandpit1!! * width).toInt()
//            val pitWidth = ((1 - sandpit1) * width).toInt()
//            g.fillRect(xPit, getHeight() - getHeight() / borderRatio, pitWidth, getHeight() / borderRatio)
//        }
    }


    companion object {
        var ropeColor = XColor(0.6f, 0.12f, 0.12f)
        var ropeStyle = XStyle(fg = ropeColor, lineWidth = 4.0)
        var zoneWidth = 200
        var goalRatio = 10
        var borderRatio = 20
        var rand = Random(1)
    }
}

class Star (val s: Vec2d){
    val inc = 0.05 * (1.0 + rand.nextDouble() * 0.5)
    var shine = rand.nextDouble()
    fun draw(xg: XGraphics) {
        shine += inc
        val bright = (1 + sin(shine)) as Float / 2
        val grey = XColor(bright, 1 - bright, bright)
        val rect = XRect(s, 2.0, 2.0, XStyle(fg = grey))
        xg.draw(rect)
    }
}

