package draw

import coev.TreeNode
import gui.*
import math.Vec2d
import kotlin.math.PI
import kotlin.math.min

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
        drawRadial(xg)
    }

    fun drawRadial(xg: XGraphics) {
        // start with the root in the centre
        // work out the size of each ring

        xg.draw(XRect(xg.centre(), xg.width(), xg.height()))
        val nRings = root.height()
        val ringSize = min(xg.width(), xg.height()) / nRings

        val xp = XPalette(min = 0.6, seed = 10L)

        repeat(nRings) {
            val rad = (nRings - it) * ringSize
            xg.draw(XEllipse(xg.centre(), rad, rad, dStyle = XStyle(fg = xp.getColor(it), stroke = false)))
        }

        // now draw each node - first set the locations
        // then draw the lines
        // then draw the nodes
        for (dn in drawNodes) {
            // calculate the polar coords of the node
            val order = widthMap[dn.depth]
            order?.let {
                val depth = if (dn.depth > 0) dn.depth + 0.5 else 0.0
                val r = 0.5 * ringSize * depth
                val theta = dn.order * 2 * PI / it
                // now x and y
                val c = Vec2d.polar(r, theta)
                dn.s = c + xg.centre()

                // now draw a line to its parent if it has one

            }
        }
        val size = ringSize / 3
        for (dn in drawNodes) {
            dn.tn.parent?.let {
                val to = drawMap[it]
                to?.let {  xg.draw(XLine(dn.s, to.s)) }
            }
        }
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
