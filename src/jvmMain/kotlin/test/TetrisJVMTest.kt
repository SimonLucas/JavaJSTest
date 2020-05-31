package test

import games.tetris.TetrisController
import games.tetris.TetrisView
import games.tetris.TetronSprite
import utilities.JEasyFrame
import kotlin.random.Random

fun main() {
    val ec = EasyComponent()
    val frame = JEasyFrame(ec, "X Tetris JVM Test")
    val xg = XGraphicsJVM(ec)
    ec.xg = xg
    val game = TetrisController()
    ec.xApp = game
    frame.addKeyListener( XKeyAdapter(game))
    val frameRate = 25
    val delay = 1000 / frameRate
    while (true) {
        ec.repaint()
        Thread.sleep(delay.toLong())
    }
}
