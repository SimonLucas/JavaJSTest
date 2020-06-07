package builders

fun main() {
    val s = buildString {
        this.append("Numbers: ")
        for (i in 1..9) {
            // 'this' can be omitted
            append(i)
        }
    }
    println(s)

    val map = buildMap{
        for (i in 1 .. 5) this.put("$i",i)

    }
    println(map)
    val map2 = buildMutableMap<String,Int>{
        for (i in 1 .. 5) this.put("$i",i)

    }
    println(map)
}

fun buildString(b: StringBuilder.() -> Unit): String {
    val stringBuilder = StringBuilder()
    stringBuilder.b()
    return stringBuilder.toString()
}

fun <T> T.myApply(f: T.() -> Unit): T {
    // val obj =
    f()
    return this
}


fun <K, V> buildMutableMap(build: HashMap<K, V>.() -> Unit): Map<K, V> {
    val map = HashMap<K, V>()
    map.build()
    return map
}

fun buildMap(m: MutableMap<String,Int>.() -> Unit): Map<String,Int> {
    val map = HashMap<String,Int>()
    map.m()
    return map
}

