package test.misc

fun main() {
    val a1 = intArrayOf(1, 2, 3)
    val a2 = intArrayOf(1, 2, 3)

    println(a1 == a2)
    println(a1.equals(a2))
    println(a1.contentEquals(a2))

    println(a1.hashCode())
    println(a2.hashCode())

    println(a1.contentHashCode())
    println(a2.contentHashCode())

    val d1 = MyData("Simon", a1)
    val d2 = MyData("Simon", a2)
    println(d1 == d2)

    val set = HashSet<Any>()
    set.add(d1)
    set.add(d2)
//    set.add(a1)
//    set.add(a2)

    println(set.size)

}

data class MyData (val name: String, val a: IntArray) {
    override fun equals(other: Any?): Boolean {
        if (!(other is MyData)) return false
        return name.equals(other.name) && a.contentEquals(other.a)
    }

    override fun hashCode(): Int {
        return name.hashCode() + a.contentHashCode()
    }
}
