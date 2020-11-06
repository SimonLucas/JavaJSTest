package games.uti

import math.IntVec2d
import util.HashCounter

enum class CellState { Empty, P1, P2 }

// this enum paves the way for recording multiple possible line states
enum class LineState { Empty, Open, Mixed, Partial1, Partial2, P1, P2, Unwon }

enum class GridState { GameOn, Draw, Win1, Win2 }

typealias LineCells = ArrayList<IntVec2d>

class LineGrid(val w: Int, val h: Int, var lineTester: LineTester) {

    fun copy(): LineGrid {
        val cp = LineGrid(w, h, lineTester)
        for (i in 0 until w) {
            for (j in 0 until h) {
                cp.grid[i][j] = grid[i][j]
            }
        }
        return cp
    }

    fun nVacant(): Int {
        var vac = 0
        for (i in 0 until w) {
            for (j in 0 until h) {
                if (grid[i][j] == CellState.Empty) vac++
            }
        }
        return vac
    }

    fun isVacant(s: IntVec2d) = grid[s.x][s.y] == CellState.Empty

    fun vacancies(): ArrayList<IntVec2d> {
        val list = ArrayList<IntVec2d>()
        for (i in 0 until w) {
            for (j in 0 until h) {
                if (grid[i][j] == CellState.Empty) list.add(IntVec2d(i, j))
            }
        }
        return list
    }

    val grid = Array(w) { Array(h) { CellState.Empty } }
    // val lineTester = LineTester()

    fun testLine(line: LineCells): LineState {
        val counter = HashCounter()
        for (cell in line)
            counter.count(grid[cell.x][cell.y])
        // return the line state based on this
        if (counter.map[CellState.P1] == line.size) return LineState.P1
        if (counter.map[CellState.P2] == line.size) return LineState.P2
        if (counter.map[CellState.Empty] == line.size) return LineState.Empty

        return LineState.Unwon

    }

    fun gridState(): GridState {
        // start by assuming no clear lines
        // then set to true if we find one
        var gameOn = false
        for (line in lineTester.lines) {
            val ls = testLine(line)
            if (ls == LineState.P1) return GridState.Win1
            if (ls == LineState.P2) return GridState.Win2
            if (ls == LineState.Empty) gameOn = true
        }
        if (gameOn) return GridState.GameOn
        else return GridState.Draw
    }

    fun play(s: IntVec2d, toMove: Int) {
        grid[s.x][s.y] =
            if (toMove == 0) CellState.P1
            else CellState.P2
    }

    fun reset() {
        for (i in 0 until w) {
            for (j in 0 until h) {
                grid[i][j] = CellState.Empty
            }
        }
    }
}

class LineTester {
    val lines = ArrayList<LineCells>()

    fun addAllDirections(n: Int) {
        addHorizontal(n)
        addVertical(n)
        addLeading(n)
        addReverse(n)
        println("Made ${lines.size} lines")
    }

    fun addVertical(n: Int) {
        for (x in 0 until n) {
            val line = LineCells()
            for (y in 0 until n) line.add(IntVec2d(x, y))
            lines.add(line)
        }
    }

    fun addHorizontal(n: Int) {
        for (y in 0 until n) {
            val line = LineCells()
            for (x in 0 until n) line.add(IntVec2d(x, y))
            lines.add(line)
        }
    }

    fun addLeading(n: Int) {
        val line = LineCells()
        for (i in 0 until n) line.add(IntVec2d(i, i))
        lines.add(line)
    }

    fun addReverse(n: Int) {
        val line = LineCells()
        for (i in 0 until n) line.add(IntVec2d(i, (n - 1 - i)))
        lines.add(line)
    }

}