package test

import games.murder.MurderMonteCarlo

fun main() {
    val game = MurderMonteCarlo()
    val solution = game.decideMurder()
    val deck = game.getDeck()
    println(solution)
    for (d in deck)
        println(d)
    game.deal()
    for (p in game.players)
        println(p)
}

class TestMurderGame {

}