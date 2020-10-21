package test.misc

fun main() {

    val num = ( (12 * 11 * 10) / 6 ) * ( (10 * 9) / 2)
    val den = (22 * 21 * 20 * 19 * 18) / factorial(5)

    // println("Den: " + den)
    println( num * 1.0 / den )
    println(   )

    val nWays = 12 * 11 * 10 * 9 * 8
    println( nWays )
    println(factorial(5))
    println(nWays / factorial(5))

    val p1 = 0.4 * 0.01
    val p2 = 0.6 * 0.004

    println(p1 / (p1 + p2))

}

fun factorial (n: Int) : Int {
    var x = 1
    for (i in 1 .. n) {
       x *= i
    }
    return x
}