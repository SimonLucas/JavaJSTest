package test.griddle

import games.griddle.GridCell
import games.griddle.ai.LetterGridModel
import games.griddle.ai.MCPlayer
import games.griddle.deck.FastSampleDeck
import games.griddle.deck.StatDeck
import games.griddle.words.GridScan
import games.griddle.words.GridUtil
import games.griddle.words.TrieDict
import util.StatSummary
import java.lang.RuntimeException

// read in the dictionary within the JVM Version
// todo: build the player AI code into an actual player


fun main() {
    // val dict = getDict()
    val dict = WordReader().readIntoTrie()
    val grid = GridUtil.sampleGrid
    val model = LetterGridModel(grid)
    val deck = StatDeck().getDeck()
    // vacancies.forEach { println(it) }

    // good, now check the playout algorithm

    val toPlace = 'S'

    val player = MCPlayer(dict)

    val action = player.getAction(model, deck, toPlace)
    println("Playing at: " + action)
}

// fun updateStats()

fun getDict(): TrieDict {
    val dict = TrieDict()
    dict.addWord("HE")
    dict.addWord("HELLO")
    dict.addWord("FREE")
    dict.addWord("FREED")
    dict.addWord("FREES")
    dict.addWord("REED")
    dict.addWord(("GRID"))
    dict.addWord(("GRIDS"))
    dict.addWord(("ID"))
    dict.addWord(("RID"))

    return dict
}
