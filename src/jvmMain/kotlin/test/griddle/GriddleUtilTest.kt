package test.griddle

import games.griddle.deck.StatDeck
import games.griddle.words.*

fun main() {
    val dict = TrieDict()
    dict.addWord("HE")
    dict.addWord("HELLO")
    dict.addWord("FREE")
    dict.addWord("FREED")
    dict.addWord("REED")
    dict.addWord(("GRID"))
    dict.addWord(("ID"))
    dict.addWord(("RID"))

    // now test the grid scan
    val gridScan = GridScan()
    gridScan.dict = dict
    val words = gridScan.findWords(GridUtil.sampleGrid)
    words.forEach{ t -> println(t)}
    println("Found ${words.size} words")
    println("Total score = ${words.sumBy { it.score() }}")

    val deck = StatDeck().getDeck()
    println(deck.cha)

    var ix = 0
    var shufflePoint = 5
    val max = 10

    for (i in 0 until max) println("$i\t ${deck.cha[i]}")

    while (!deck.isEmpty()) {
        println("${ix++}\t ${deck.next()}")
        if (ix == shufflePoint) {
            deck.shuffleRemainingCards()
            deck.ix = 0
            println("Shuffled remaining, printing again")
            ix = 0
            shufflePoint = -1
        }
    }

}
