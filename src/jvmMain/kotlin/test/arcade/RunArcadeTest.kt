package test.arcade

import agents.MctsAgent
import agents.RandomAgent
import agents.SimpleEvoAgent
import games.arcade.ArcadeTestApp
import games.arcade.AsteroidsGame
import games.arcade.SpriteEngineApp
import gui.geometry.ContainsTestApp
import test.EasyComponent
import test.XGraphicsJVM
import test.XKeyAdapter
import test.XMouseAdapter
import utilities.JEasyFrame

fun main() {
    val ec = EasyComponent(640, 480)
    val frame = JEasyFrame(ec, "X Graphics Arcade Test")
    val xg = XGraphicsJVM(ec)
    ec.xg = xg
    AsteroidsGame.useActionAdapter = true
    // val app = ArcadeTestApp()
    val app = SpriteEngineApp()
    app.agent = SimpleEvoAgent(probMutation = 0.05, useMutationTransducer = false)
    // app.agent = RandomAgent()
    app.agent = MctsAgent(rolloutLength = 50, nPlayouts = 50)
    ec.xApp = app
    frame.addKeyListener( XKeyAdapter(app))
    ec.addMouseListener( XMouseAdapter(app))
    ec.addMouseMotionListener( XMouseAdapter(app))
    val frameRate = 25
    val delay = 1000 / frameRate
    while (true) {
        ec.repaint()
        Thread.sleep(delay.toLong())
    }
}
