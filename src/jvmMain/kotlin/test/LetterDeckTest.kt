package test

import games.griddle.deck.StatDeck

fun main() {
    val deck = StatDeck().getDeck()
    var i = 0
    while (!deck.isEmpty()) {
        println("${++i}\t ${deck.next()}")
    }
}

