package games.murder

enum class CardType {Character, Location, Weapon}

data class Card (val str: String, val cardType: CardType)


data class Solution(
    val who: Card,
    val location: Card,
    val weapon: Card,
)

object GameSetup {
    val characters = arrayListOf<Card>(
        Card("Miss Scarlet", CardType.Character),
        Card("Mrs White", CardType.Character),
        Card("Col. Mustard", CardType.Character),
    )

    val rooms = arrayListOf<Card>(
        Card("Billiard Room", CardType.Location),
        Card("Study", CardType.Location),
        Card("Kitchen", CardType.Location),
    )

    val weapons = arrayListOf<Card>(
        Card("Dagger", CardType.Weapon),
        Card("Lead Piping", CardType.Weapon),
        Card("Revolver", CardType.Weapon),
    )
}

class MurderMonteCarlo (
    val characters:ArrayDeque<Card> = ArrayDeque(GameSetup.characters),
    val locations:ArrayDeque<Card> = ArrayDeque(GameSetup.rooms),
    val weapons:ArrayDeque<Card> = ArrayDeque(GameSetup.weapons),
    val nPlayers:Int = 4,
){

    val players = ArrayList<Player>()


    init {
        characters.shuffle()
        locations.shuffle()
        weapons.shuffle()
        for (i in 0 until nPlayers)
            players.add(Player())
    }



    fun decideMurder(): Solution {
        val who = characters.removeFirst()
        val location = locations.removeFirst()
        val weapon = weapons.removeFirst()
        return Solution(who, location, weapon)
    }

    fun getDeck(): ArrayDeque<Card> {
        val deck = ArrayDeque<Card>()
        deck.addAll(characters)
        deck.addAll(locations)
        deck.addAll(weapons)
        deck.shuffle()
        return deck
    }

    fun deal() {
        val deck = getDeck()
        for (i in 0 until deck.size) {
            players[i % nPlayers].cards.add(deck.get(i))
        }
    }





}

data class Player (
    val cards: ArrayDeque<Card> = ArrayDeque()
)
