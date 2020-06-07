package games.griddle.deck

import kotlin.random.Random


/**
 *  This class serves two purposes:
 *   1. it allows a deck to be dealt one card at a time to a player
 *
 *   2. it allows shuffling of the entire set of cards (not just the 25 dealt)
 *   that have not already been given to the player (i.e. starting at the one
 *   above ix, which then enables fast playouts of the cards
 *
 *   The deck has been fully dealy wnen ix == dealSize
 *
 */

class FastSampleDeck(val cha: Array<Char>, var ix: Int = 0) {

    companion object {
        val dealSize = 25
    }

    fun deepCopy() = FastSampleDeck(cha.copyOf(), ix)

    fun next(): Char? {
        if (ix < dealSize)
            return cha[ix++]
        else
            return null
    }

    fun isEmpty() = ix >= dealSize

    val rand = Random

    fun shuffleRemainingCards() {
        for (i in ix  until dealSize) {
            val sw: Int = i + rand.nextInt(cha.size - i)
            swap(cha, i, sw)

        }
    }

    fun shuffleRemainingDealtCards() {
        // this is a "cheat" version for comparison where the
        // shuffle is always on the cards that will be deaalt
        for (i in ix  until dealSize) {
            val sw: Int = i + rand.nextInt(dealSize - i)
            swap(cha, i, sw)

        }
    }

    fun swap(a: Array<Char>, i: Int, j: Int) {
        val tmp = a[i]
        a[i] = a[j]
        a[j] = tmp
    }
}

class LetterDeck(val cha: Array<Char>, var ix: Int = cha.size - 1) {

    fun deepCopy(): LetterDeck {
        return LetterDeck(cha.copyOf(), ix)
    }

    fun next(): Char? {
        if (ix >= 0)
            return cha[ix--]
        else
            return null
    }

    fun isEmpty() = ix < 0
}

class GenDeck<T>(val array: Array<T>, var ix: Int = array.size - 1) {

    fun deepCopy(): GenDeck<T> {
        return GenDeck<T>(array.copyOf<T>(), ix)
    }

    fun next(): T? {
        if (ix >= 0)
            return array[ix--]
        else
            return null
    }

    fun isEmpty() = ix < 0
}


class StatDeck {
    // Integer seed = 0; // (int) System.currentTimeMillis();
    // static Random rand = new Random();

    companion object {
        //    static String[] rawDeck =
        //            "SEAOR ILTND UCYPM HGBKF WVZXJQ".split(" ");
        // this deck should score higher on average
        var rawDeck = "SEAOI RLTN DUPM CYHGBKF WVZXJQ".split(" ").toTypedArray()
        var reps = intArrayOf(5, 4, 3, 2, 1)
        var nLetters = 26
        var deckString = makeCards()
        fun makeCards(): ArrayList<Char> {
            val cha = ArrayList<Char>()
            var repIndex = 0
            for (s in rawDeck) {
                for (ch in s.subSequence(0, s.length)) {
                    for (i in 0 until reps[repIndex]) {
                        cha.add(ch)
                    }
                }
                repIndex++
            }
            return cha
        }
    }


    fun getDeck(seed: Long = -1L): FastSampleDeck {

        val rand: Random = if (seed < 0) Random else Random(seed)
        // for now just do random shuffles
        val deck = makeCards()

        // println("Seed = " + seed)
        var nTries = 0
        do {
            deck.shuffle(rand)
            val deal = deck.subList(0, 25).toTypedArray()
            if (ShuffleValidator.accept(deal)) {
                return FastSampleDeck(deck.toTypedArray())
            }
            if (nTries++ > 100) {
                println("Returning a non-ideal deck after $nTries")
            }
        } while (true)
    }

    fun letterDistribution(deck: ArrayList<Char>): IntArray {
        // create a new array of int ecah time; players may
        // use this to keep a tally of the remaining letters
        val tots = IntArray(nLetters)
        for (i in deck.indices) {
            tots[deck[i] - 'A']++
        }
        return tots
    }

}


object ShuffleValidator {
    var vowels = "AEIOU"
    var vowelChars = vowels.subSequence(0, vowels.length)
    var minVowels = 8
    var maxVowels = 12
    var maxPairs = 1

    fun accept(chars: Array<Char>): Boolean {
        return consecutivePairs(chars) <= maxPairs &&
                countVowels(chars) >= minVowels &&
                countVowels(chars) <= maxVowels
    }

    fun consecutivePairs(chars: Array<Char>): Int {
        var nPairs = 0
        for (i in 1 until chars.size) {
            if (chars[i - 1] == chars[i]) nPairs++
        }
        return nPairs
    }

    fun countVowels(chars: Array<Char>): Int {
        var tot = 0
        for (ch in chars) if (isVowel(ch)) tot++
        return tot
    }

    fun isVowel(ch: Char): Boolean {
        for (c in vowelChars) {
            if (c == ch) return true
        }
        return false
    }
}
