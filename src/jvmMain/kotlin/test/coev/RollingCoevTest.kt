package test.coev

import agents.RandomAgent
import coev.GameState
import coev.Seq
import coev.Tree
import coev.TreeNode
import draw.TreeDraw
import games.gridgames.TicTacToe
import ggi.ExtendedAbstractGameStateMulti
import ggi.SimplePlayerInterfaceMulti
import test.EasyComponent
import test.XGraphicsJVM
import test.XKeyAdapter
import test.XMouseAdapter
import util.StatSummary
import utilities.ElapsedTimer
import utilities.JEasyFrame
import kotlin.random.Random

fun main() {

    // TreeTest().addTest()

    val game = TicTacToe.getGame(3)
    val gameTester = GameTreeBuilder(game, nGames = 50)
    gameTester.runTests()
    gameTester.root.minimax()

    // gameTester.root.report(0)
    println("Game tree has ${gameTester.root.nNodes()} nodes")
    println("Tree is ${gameTester.root.height()} nodes high")

//    val td = TreeDraw()
//    td.setup(gameTester.root)

    AppTest().startApp(gameTester.root)


}

class TreeTest() {
    // test tree nodes

    fun addTest() {

        val list = CoevTest().randGen()

        val tree = Tree()
        // add then check
        for (seq in list) {
            tree.add(seq)
        }

        // now test them
        for (seq in list) {
            println("in: ${tree.contains(seq)} : $seq")
        }

        println()
        // but random ones may not be
        repeat(10)
        {
            val seq = CoevTest().randSeq()
            println("in: ${tree.contains(seq)} : $seq")
        }

        println("Tree has ${tree.root.nNodes()} nodes")
    }
}

class AppTest {
    fun startApp(root: TreeNode) {
        val ec = EasyComponent(600, 600)
        val frame = JEasyFrame(ec, "Tree Draw Test")
        val xg = XGraphicsJVM(ec)
        ec.xg = xg
        val app = TreeDraw().setup(root)
        ec.xApp = app

        frame.addKeyListener(XKeyAdapter(app))
        ec.addMouseListener(XMouseAdapter(app))
        ec.addMouseMotionListener(XMouseAdapter(app))

        val frameRate = 25
        val delay = 1000 / frameRate
        while (true) {
            ec.repaint()
            Thread.sleep(delay.toLong())
        }
    }
}

class CoevTest() {
    val nActions = 2
    val len = 5
    val nTrials = 10
    val rand = Random

    fun randSeq() : Seq {
        val list = Seq()
        repeat(len) { list.add( rand.nextInt(nActions) )}
        return list
    }

    fun randGen() : ArrayList<Seq> {
        val list = ArrayList<Seq>()
        repeat(nTrials) {
            list.add(randSeq())
        }
        return list
    }
}

class GameTest {
    // start with a game, play it out!

    val root = TreeNode()

    fun rootPlayout(gs: GameState) {
        // need a way to select actions...




    }

}

class GameTreeBuilder(
    var game: ExtendedAbstractGameStateMulti,
    var nGames: Int = 10,
    var p1: SimplePlayerInterfaceMulti = RandomAgent(),
    var p2: SimplePlayerInterfaceMulti = RandomAgent()
) {

    val root = TreeNode()

    fun runTests() : StatSummary {
        val t = ElapsedTimer()
        val ss = StatSummary()
        repeat(nGames) {
            println("Playing $it")
            val score = playGame()
            println("$it \t -> \t $score")
            ss.add(score)
        }
        println("Ticks per sec: " + 1000.0 * game.totalTicks() / t.elapsed())
        println(t)
        return ss
    }

    // todo: get the game stuff working here ...
    fun playGame() : Double {
        game.randomInitialState()
        var node = root
        node.owner = game.toMove()
        node.nActions = game.nActions(game.toMove())

        val players = arrayOf(p1, p2)

        while (!game.isTerminal(0)) {
            val move = players[game.toMove()].getAction(game, game.toMove())
            game.next(intArrayOf(move))
            // update the tree with the move made
            node = node.follow(move)
            node.owner = game.toMove()
            node.nActions = game.nActions(game.toMove())
        }
        // now backup the results
        backup(node, game.score(0))
        return game.score(0)
    }

    fun backup(node: TreeNode, score: Double) {
        var cur: TreeNode? = node
        node.noteScore(score)
        while (cur != null) {
            cur?.let {
                // it.noteScore(score)
                val parent = it.parent
                if (parent != null) {
                   parent.noteScore(it.getScore())
                }
                cur = parent
            }
        }
    }



}
