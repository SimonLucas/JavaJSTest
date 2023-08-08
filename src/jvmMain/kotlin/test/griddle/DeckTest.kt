package test.griddle

import games.griddle.deck.StatDeck

fun main() {
    val deck = StatDeck().getDeck(100)
    var s = ""
    repeat(25) {
        s = s + deck.next()
    }
    println(s)
    println(s.length)
}
