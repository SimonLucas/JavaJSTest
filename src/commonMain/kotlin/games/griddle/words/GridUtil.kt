package games.griddle.words

import games.griddle.GridCell


class GridUtil {
    companion object {
        val sampleGrid = arrayOf(
            charArrayOf(' ', ' ', 'F', ' ', 'F'),
            charArrayOf('L', ' ', 'U', ' ', 'R'),
            charArrayOf('A', ' ', ' ', ' ', 'E'),
            charArrayOf(' ', ' ', ' ', ' ', 'E'),
            charArrayOf('G', 'R', 'I', 'D', ' ')
        )
    }
}

enum class Dir(val dx:Int, val dy:Int) {
    H(1,0),
    V(0,1);

    fun step(cell: GridCell) = GridCell(cell.x+dx, cell.y + dy)
    fun stepBy(cell: GridCell, n: Int) = GridCell(cell.x+n*dx, cell.y + n*dy)
    fun perp() = if (this == H) V else H
}

class GridWord(val s: String, val start: GridCell, var dir: Dir) {
    fun score(): Int {
        return scores[s.length]
    }

    override fun toString(): String {
        return s + " : " + start + " : " + dir + " : " + score()
    }

    companion object {
        var scores = intArrayOf(0, 0, 1, 3, 7, 10, 15)
    }

}

