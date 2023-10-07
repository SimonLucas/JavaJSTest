package games.griddle.words

import games.griddle.GridCell


class GridScan {

    // this needs configuring to add words to
    var dict: TrieDict = TrieDict()

    companion object {
        val minLen = 2
        val maxLen = 5
    }

    fun findWords(a: Array<CharArray>): List<GridWord> {
        val words = ArrayList<GridWord>()
        // loop over horizontal and vertical starting in top left for each direction
        for (dir in Dir.values()) {
            val origin = GridCell(0, 0)
            // we assume a square grid
            for (i in a.indices) {
                val start = dir.stepBy(origin, i)
                lineScan(a, start, dir.perp(), words)
            }
        }
        return words
    }

    fun lineScan(
        a: Array<CharArray>,
        lineStart: GridCell,
        dir: Dir,
        words: MutableList<GridWord>
    ) {
        // try for words starting at the first index (i.e. 0), then the second, ...
        for (offset in 0..(a.size - minLen)) {
            // now start the search at the root node for this offset
            var tn: TrieNode? = dict.root
            var cur = dir.stepBy(lineStart, offset)
            val wordStart =cur
            var i = 0
            val max = maxLen - offset
            val sb = StringBuilder()
            while (tn != null && i < max) {
                tn = tn.follow(a[cur.x][cur.y])
                // println("    -> $cur")
                sb.append(a[cur.x][cur.y])
                // if (tn != null) System.out.println(a[i+start] + "\t " + tn.isWord);
                // at the list of words if the current substring is a word
                if (tn != null && tn.isWord) {
                    // System.out.format("Word starting at %d of length %d\n", start, len);
                    val word = GridWord(sb.toString(), wordStart, dir)
                    words.add(word)
                }
                // advance to the next cell
                i++
                cur = dir.step(cur)
            }
        }
    }
}
