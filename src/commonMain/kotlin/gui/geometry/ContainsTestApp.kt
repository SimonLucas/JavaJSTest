package gui.geometry

import games.arcade.vehicles.Asteroid
import gui.*
import math.Vec2d
import kotlin.math.PI
import kotlin.math.min

class ContainsTestApp : XApp {
    val xp = XPalette(seed = 76L, min = 0.2)
    val inColor = xp.colors[0]
    val outColour = xp.colors[1]
    var mp: Vec2d? = null
    var rot = 0.0

    val rock = Asteroid(12, 20.0).getPoly()

    override fun paint(xg: XGraphics) {
        val rect = XRect(xg.centre(), xg.width() / 2, xg.height() / 2)
        rect.rotation = rot
        rect.dStyle.fg =
            if (rect.contains(mp)) inColor else outColour
        xg.draw(rect)
        rot += PI / 180

        val a = min(xg.width(), xg.height()) / 4
        val points =
            arrayListOf<Vec2d>(Vec2d(0.0, a), Vec2d(a, 0.0), Vec2d(0.0, -a), Vec2d(-a, 0.0))

        val poly = XPoly(Vec2d(xg.width() / 4, xg.height() / 2), points, rotation = rot)
        poly.dStyle.fg =
            if (poly.contains(mp)) xp.colors[2] else xp.colors[3]
        xg.draw(poly)

        rock.centre = Vec2d(xg.width()/4, xg.height()/4)
        rock.rotation = rot
        rock.dStyle.fill = rock.contains(mp)
        xg.draw(rock)

        val ellipse = XEllipse(Vec2d(xg.width() * 0.75, xg.height()/2),
            xg.width() / 2, xg.height() / 4)
        ellipse.rotation = rot
        ellipse.dStyle.fg =
            if (ellipse.contains(mp)) xp.colors[4] else xp.colors[5]
        xg.draw(ellipse)
    }

    override fun handleMouseEvent(e: XMouseEvent) {
        // println(e)
        mp = e.s
    }

    override fun handleKeyEvent(e: XKeyEvent) {
    }
}