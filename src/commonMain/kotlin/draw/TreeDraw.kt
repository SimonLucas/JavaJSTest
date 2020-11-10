package draw

import coev.TreeNode
import gui.*
import math.Vec2d
import kotlin.math.PI
import kotlin.math.min

abstract class Positioner (){
    abstract fun setup(xg: XGraphics, nLevels: Int)
    abstract fun place(depth: Double, order: Double): Vec2d
    abstract fun drawBackground(xp: XPalette)
}

class Radial() : Positioner() {
    lateinit var xg: XGraphics
    var nLevels: Int = 0
    var ringSize = 0.0

    override fun setup(xg: XGraphics, nLevels: Int) {
        this.xg = xg
        this.nLevels = nLevels
        ringSize = min(xg.width(), xg.height()) / nLevels
    }

    override fun place(depth: Double, order: Double): Vec2d {
        val depthFac = if (depth > 0) depth + 0.5 else 0.0
        val r = 0.5 * ringSize * depthFac
        val theta = order * 2 * PI
        return Vec2d.polar(r, theta) + xg.centre()
    }

    override fun drawBackground(xp: XPalette) {
        val ringSize = min(xg.width(), xg.height()) / nLevels

        repeat(nLevels) {
            val rad = (nLevels - it) * ringSize
            xg.draw(XEllipse(xg.centre(), rad, rad, dStyle = XStyle(fg = xp.getColor(it), stroke = false)))
        }

    }

}
val sum = { x: Int, y: Int -> x + y }



class TreeDraw : XApp {

    var root: TreeNode = TreeNode()

    companion object {
        var margin = 0.05
    }

    // record number of nodes at each level of the tree
    val widthMap = HashMap<Int,Int>()
    // val depthMap
    val drawMap = HashMap<TreeNode,DrawNode>()
    val drawNodes = ArrayList<DrawNode>()

    var positioner = Radial()

    fun setup(root: TreeNode): TreeDraw {
        this.root = root
        widthMap.clear()
        drawNodes.clear()
        count(root, depth = 0)
        println("Tree is ${root.height()} nodes high")
        println()
        println("Width profile: ")
        repeat(root.height()) {
            println("$it \t ->  ${ widthMap[it] }")
        }
        return this
    }

    fun count(node: TreeNode, depth: Int) {
        var nd = widthMap[depth]
        if (nd == null) nd = 0
        val dn = DrawNode(node, depth, nd)
        drawNodes.add(dn)
        drawMap[node] = dn
        // make a new DrawNode with this depth,
        // and order nd within this depth
        widthMap[depth] = 1 + nd
        for (x in node.nextMap.values) {
            // how many nodes have we seen at the current depth?
            x?.let { count(it,1 + depth) }
        }
    }

    override fun paint(xg: XGraphics) {
        drawNodes(xg)
    }

    fun drawNodes(xg: XGraphics) {
        // start with the root in the centre
        // work out the size of each ring

        positioner.setup(xg, root.height())
        xg.draw(XRect(xg.centre(), xg.width(), xg.height()))
        val xp = XPalette(min = 0.6, seed = 10L)
        positioner.drawBackground(xp)

        // now draw each node - first set the locations
        // then draw the lines
        // then draw the nodes
        for (dn in drawNodes) {
            val order = widthMap[dn.depth]
            order?.let {
                dn.s = positioner.place(dn.depth.toDouble(), dn.order.toDouble() / it)
            }
        }

        // draw lines connect each node with its parent, if it has one
        for (dn in drawNodes) {
            dn.tn.parent?.let {
                val to = drawMap[it]
                to?.let {  xg.draw(XLine(dn.s, to.s)) }
            }
        }

        // draw the nodes
        val levelGap = min(xg.width(), xg.height()) / root.height()
        val size = levelGap / 3
        for (dn in drawNodes) {
            val style = XStyle(fg = getColor(dn.tn.score))
            // if (dn.tn.)
            xg.draw(XEllipse(dn.s, size, size, style))
        }
    }
    fun getColor(score: Double?) : XColor {
        if (score == null) return XColor.gray
        if (score < 0.0) return XColor.black
        if (score == 0.0) return XColor.yellow
        if (score > 0.0) return XColor.white
        return XColor.gray
    }
}

class DrawNode (val tn: TreeNode, val depth: Int, val order: Int, var s: Vec2d = Vec2d()) {
    // draw the data at the required position, then draw a link to each
}
