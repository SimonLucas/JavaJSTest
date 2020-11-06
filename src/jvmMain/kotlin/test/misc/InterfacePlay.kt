package test.misc

// aim to provide a better way to count total nextState calls

fun main() {
    val g1 = GameOne(0)
    val g2 = GameOne(0)

    g1.next()
    g1.next()
    g2.next()

    val g3 = g1.copy()
    g1.next()
    println(g1)
    println(g2)
    println(g3)
}

interface TransitionCounter {
    var n : Int
    fun next()
}

data class GameOne(override var n: Int) : TransitionCounter {
    override fun next() {
        n++
    }

}


// from https://medium.com/mobile-app-development-publication/kotlin-made-interface-so-much-better-bbeaa59abdd7
interface Movable {
    val legsCount: Int
    fun canWalk() = legsCount > 1
}
object FourLegged : Movable {
    override val legsCount = 4
}
class Horse : Movable by FourLegged
class Dog : Movable by FourLegged

