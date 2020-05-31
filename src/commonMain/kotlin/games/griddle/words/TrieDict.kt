package games.griddle.words

class TrieDict {
    var root: TrieNode
    var nWords = 0

    fun addWord(s: String) {
        var tn: TrieNode = root
        for (ch in s.subSequence(0, s.length) ) {
            tn = tn.add(ch)
        }
        if (!tn.isWord) {
            tn.isWord = true
            nWords++
        }
    }

    fun addWords(words: List<String>) {
        words.forEach { addWord(it.trim()) }
    }

    fun testWord(s: String) {
        val chars = s.subSequence(0, s.length)
        var ix = 0
        var tn: TrieNode? = root
        while (tn != null && ix < chars.length) {
            tn = tn.follow(chars[ix])
            if (tn != null) println(chars[ix].toString() + "\t " + tn.isWord)
            ix++
        }
    }

    init {
        root = TrieNode()
    }
}


class TrieNode
{
    var isWord = false
    var next: Array<TrieNode?>? = null

    fun rangeCheck(ch: Char) {
        if (ch < first || ch > last) throw RuntimeException("TrieNode char out of range: $ch")
    }

    fun outOfRange(ch: Char): Boolean {
        return ch < first || ch > last
    }

    fun follow(ch: Char): TrieNode? {
        if (next == null) return null
        if (outOfRange(ch)) return null
        val ix = ch - 'A'
        return next!![ix]
    }

    fun add(ch: Char): TrieNode {
        rangeCheck(ch)
        val ix = ch - 'A'
        if (next == null) next = arrayOfNulls(range)
        if (next!![ix] == null) next!![ix] = TrieNode()
        return next!![ix]!!
    }

    companion object {
        // specially adapted for word games
        // where each word is composed only of upper-case characters
        // and no punctuation is allowed
        var first = 'A'
        var last = 'Z'
        var range = 1 + last.toInt() - first.toInt()
    }

}