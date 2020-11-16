package coev

import ggi.ExtendedAbstractGameStateMulti
import util.StatSummary
import kotlin.math.max

typealias Seq = ArrayList<Int>

// although very descriptive, the full name is a bit of a mouthful...
typealias GameState = ExtendedAbstractGameStateMulti



class TreeNode (var owner: Int = 0, val parent : TreeNode? = null, var nActions : Int? = null) {
    // var score: Double? = null

    // for now assume actions are enumerated by Ints
    val nextMap = HashMap<Int,TreeNode?>()

    // store the node stats - but stats on what?
    // should they be multi-dimensional?
    val ss = StatSummary()

    // this follows and creates a new node if necessary
    // but without ownerId
    fun follow(action: Int) : TreeNode {
        var nextNode = nextMap[action]
        if (nextNode == null) {
            nextNode = TreeNode(parent = this)
            nextMap[action] = nextNode
        }
        return nextNode
    }

    // return the number of the nodes in the tree below and including this one
    fun nNodes() : Int {
        var n = 1
        for (node in nextMap.values) {
            node?.let { n += it.nNodes() }
        }
        return n
    }

    fun report(depth: Int) {
        repeat(depth) { print("  ")}
        println("Depth $depth, size: ${nNodes()}, tried ${nextMap.size} from $nActions")
        for (node in nextMap.values) {
            node?.let { it.report(1 + depth) }
        }
    }

    fun height() : Int {
        // the number of nodes including this one from this node to the furthest leaf
        var maxHeight = 0
        for (node in nextMap.values) {
            node?.let { maxHeight = max(maxHeight, it.height()) }
        }
        return 1 + maxHeight
    }

    fun noteScore(score: Double?) {
        if (score != null) ss.add(score)
    }

    fun getScore() : Double? {
        if (ss.n() == 0) return null
        if (owner == 0) return ss.max()
        else return ss.min()
    }

    fun minimax(): Double {
        val current = getScore()

        // calculate a minimax value if non-terminal
        if (!nextMap.isEmpty()) {
            ss.reset()
            for (child in nextMap.values)
                child?.let{ss.add(child.minimax())}
        }

        val updated = getScore()
        if (current != updated) {
            println("$current -> $updated")
        }
        if (owner == 0) return ss.max()
        else return ss.min()
    }
}

class Tree {
    val root = TreeNode()

    fun add(seq: ArrayList<Int>) {
        // keep track of the current node in the tree, adding new nodes as needed
        var node = root
        for (x in seq) {
            node = node.follow(x)
        }
    }

    fun contains(seq: ArrayList<Int>) : Boolean {
        var node = root
        for (x in seq) {
            // each time
            val next = node.nextMap[x]
            if (next == null) return false
            node = next
        }
        return true
    }
}

