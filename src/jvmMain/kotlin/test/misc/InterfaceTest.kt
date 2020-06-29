package test.misc

interface Stats {
    fun add(x: Number)
    fun n(): Int
    fun mean(): Double
}

fun main() {
    val ss = StreamStats()
    println(ss.mean())
}

class StreamStats : Stats {
    override fun add(x: Number) {
        TODO("Not yet implemented")
    }

    override fun n(): Int {
        TODO("Not yet implemented")
    }

    override fun mean(): Double {
        TODO("Not yet implemented")
    }


}