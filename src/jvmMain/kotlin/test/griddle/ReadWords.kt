package test.griddle

import games.griddle.words.TrieDict
import java.io.File

fun main() {

    val dict = WordReader().readIntoTrie()
    println("Read ${dict.nWords} words" )
}

class WordReader {
    companion object val defaultPath = "./src/jsMain/kotlin/sample/words.js"

    fun readIntoTrie(path:String = defaultPath) : TrieDict {
        // we're going to read in a JavaScript file
        // with some padding either side, so we'll just filter out those
        // - they have a back-quote in them
        val dict = TrieDict()
        File(path).forEachLine { if (!it.contains('`')) dict.addWord(it.trim()) }
        return dict
    }

    fun readWordList (path:String = defaultPath) : List<String> {
        val list = ArrayList<String>()
        File(path).forEachLine { if (!it.contains('`')) list.add(it.trim()) }
        return list
    }
}
