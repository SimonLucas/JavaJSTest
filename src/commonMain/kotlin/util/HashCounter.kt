package util

class HashCounter {
    val map =HashMap<Any,Int>()
    fun count(a: Any) {
        val n = map[a]
        if (n == null) map[a] = 1
        else map[a] = n+1
    }
}
