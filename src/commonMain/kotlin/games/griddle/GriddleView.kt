package games.griddle

import games.griddle.ai.ScoredCell
import gui.*
import math.Vec2d
import kotlin.math.min

class GriddleView(val nCols: Int, val nRows: Int) {

    var count = 0

    var a: Array<CharArray>? = null
    var w: Double = 1.0
    var h: Double = 1.0
    var cellSize = 50.0
    var centre = Vec2d()

    var messageText: XText? = null
    var scoreText = XText("", Vec2d(), TStyle(), XStyle())
    var message: String = "?"

    fun paint(xg: XGraphics) {

        // work out the cell size
        calcCellSize(xg)
        drawBackground(xg)
        draw(xg, a)
        drawMessage(xg, messageText)
        drawScore(xg, scoreText)
        // println(cellSize)
    }


    fun calcCellSize(xg: XGraphics) {
        // val
        centre = Vec2d(xg.width() / 2, xg.height() / 2)

        // work out the cell size as the minimum of the
        // row and col size fits
        var nc = nCols
        var nr = nRows
        // add a spare column or row for messaging depending on  geometry
        if (xg.width() > xg.height()) nc++ else nr++

        val colSize = xg.width() / nc
        val rowSize = xg.height() / nr
        cellSize = min(colSize, rowSize)

        // now calculate also the message area
        // if wider then tall will be at the right
        // otherwise at the bottom

        if (xg.width() > xg.height()) {
            val spare = xg.width() - nCols * cellSize
            val cTile = Vec2d(cellSize * nCols + spare/2, 3 * xg.height()/4)
            val cScore = Vec2d(cellSize * nCols + spare/2, xg.height()/4)
            messageText = XText(message, cTile, TStyle(size = spare/2), XStyle())
            scoreText = XText(score.toString(), cScore, TStyle(size = spare/2), XStyle())
        } else {
            val spare = xg.height() - nRows * cellSize
            val cTile = Vec2d(xg.width()/2, cellSize * nRows + 3*spare/4 )
            val cScore = Vec2d(xg.width()/2, cellSize * nRows + spare/4 )
            messageText = XText(message, cTile, TStyle(size = spare/2), XStyle())
            scoreText = XText(score.toString(), cScore, TStyle(size = spare/2), XStyle())
        }
    }


    var score = 0


    fun drawScore(xg: XGraphics, scoreText: XText) {
        scoreText.str = score.toString()
        xg.draw(scoreText)
    }

    fun drawMessage(xg: XGraphics, text: XText?) {
        if (text!=null) xg.draw(text)
    }

    var scored: List<ScoredCell> = ArrayList<ScoredCell>()

    fun setData(a: Array<CharArray>, ch: Char, score:Int = 0,
                scored: List<ScoredCell> = ArrayList<ScoredCell>()) {
        setGrid(a)
        setLetter(ch)
        this.score = score
        this.scored = scored
    }

    fun setGrid(a: Array<CharArray>?) {
        this.a = a
    }

    fun setLetter(ch: Char) {
        message = ch.toString()
    }

    fun drawBackground(xg: XGraphics) {
        val style = XStyle()
        val rect = XRect(centre, xg.width(), xg.height(), style)
        style.fg = XColor.black
        xg.draw(rect)
    }

    fun draw(xg: XGraphics, a: Array<CharArray>?) {
        if (a == null) return

        val style = XStyle()
        // val rect = XRect(centre, cellSize, cellSize, style)

        // println("cellSize = $cellSize")
        val tStyle = TStyle(size = cellSize)
        val text = XText(" ", centre, tStyle, style)



        for (i in 0 until nCols) {
            for (j in 0 until nRows) {
                // println(a[i][j])
                // need to just set the rectangle to draw
                val centre = Vec2d((i + 0.5) * cellSize, (j + 0.5) * cellSize)
                LetterTile().draw(xg, centre, cellSize, a[i][j])
            }
        }
    }

    fun getGridCell(s: Vec2d) : GridCell? {
        val col = (s.x / cellSize).toInt()
        val row = (s.y / cellSize).toInt()
        if (row < nRows && col < nCols)
            return GridCell(col, row)
        else
            return null
    }


    // fun drawTile()

    companion object {
        // size of each block in pixels
        // var cellSize = 20
        // var BG = 0
        var frame = XColor.blue

        // code for the background colour
        // val BG = 7
    }
}

class LetterTile {
    var size = 0.9
    fun draw(xg: XGraphics, centre: Vec2d, cellSize: Double, ch: Char) {
        val style = XStyle()
        val rect = XRoundedRect(centre, cellSize*size, cellSize*size, cornerRad = 0.1, dStyle = style)

        // println("cellSize = $cellSize")
        val tStyle = TStyle(size = cellSize * size)
        val text = XText(" ", centre, tStyle, style)

        style.fg = XColor.red  // colors[a[i][j]]
        style.stroke = true
        style.lc = XColor.gray
        xg.draw(rect)

        if (ch == ' ') {
            style.stroke = true
            style.lc = XColor.blue
            style.fg = XColor.green
            xg.draw(rect)
        } else {
            // draw the char
            text.str = ch.toString()
            text.p = rect.centre
            xg.draw(text)
        }
    }
}

