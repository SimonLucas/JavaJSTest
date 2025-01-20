package test.evo

import coev.TreeNode
import draw.TreeDraw
import evo.*
import test.EasyComponent
import test.XGraphicsJVM
import test.XKeyAdapter
import test.XMouseAdapter
import utilities.JEasyFrame

fun main() {
    println(evo.EvoUtil().randBin(10))
    println(evo.EvoUtil().randSeq())
    val target = arrayListOf<Int>(0, 1, 0, 1, 0, 1, 0, 1, 0, 1)
    val evo = SimpleEvo(target.size, 2, MinDiff(target))
    repeat(10) {
        evo.run(1)
        println("$it\t ${evo.bestYet}")
    }
    // println(6 / 2 * (1 + 2))
    AppTest().startApp()
}


class AppTest {
    fun startApp() {
        val ec = EasyComponent(600, 600)
        val frame = JEasyFrame(ec, "Evo Maze Test")
        val xg = XGraphicsJVM(ec)
        ec.xg = xg
        val app = SimpleEvoApp()
        ec.xApp = app

        frame.addKeyListener(XKeyAdapter(app))
        ec.addMouseListener(XMouseAdapter(app))
        ec.addMouseMotionListener(XMouseAdapter(app))

        val frameRate = 50
        val delay = 1000 / frameRate
        while (true) {
            ec.repaint()
            Thread.sleep(delay.toLong())
        }
    }
}
