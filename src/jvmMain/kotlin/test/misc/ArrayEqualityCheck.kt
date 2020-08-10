package test.misc

fun main() {
    val a1 = intArrayOf(1, 2, 3)
    val a2 = intArrayOf(1, 2, 3)

    println(a1 == a2)
    println(a1.contentEquals(a2))

    val d1 = MyData("Simon", a1)
    val d2 = MyData("Simon", a2)
    println(d1 == d2)

}

data class MyData (val name: String, val a: IntArray) {
    override fun equals(other: Any?): Boolean {
        if (!(other is MyData)) return false
        return name.equals(other.name) && a.contentEquals(other.a)
    }

    override fun hashCode(): Int {
        return super.hashCode()
    }
}
