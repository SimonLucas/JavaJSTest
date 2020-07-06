package test.misc

fun main() {
    val multiLine =
        """
        First Line
        Second Line
        Third Line
    """.trimIndent()

    println(multiLine)

    // demonstrates that we can gain easy access to this line-by-line
    for (line in multiLine.split("\n"))
        println("[$line]")


}