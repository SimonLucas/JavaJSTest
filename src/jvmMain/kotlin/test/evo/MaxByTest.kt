package test.evo

fun main() {
    val map = hashMapOf<String,Int>(
        "Hi" to 3,
        "Bye" to 2,
        "Si" to 10,
    )

    println(map.maxByOrNull { it.value })

}