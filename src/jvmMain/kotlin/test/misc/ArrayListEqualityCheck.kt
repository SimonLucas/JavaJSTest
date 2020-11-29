package test.misc

fun main() {
    // demonstrates that ArratList is already Hash-ready
    val a1 = arrayListOf<Int>(1, 2, 3)
    val a3 = arrayListOf<Int>(1, 2)

    val a2 = a3.clone() as ArrayList<Int>

    a3.add(4)

    a2.add(3)

    println(a1 == a2)
    println(a1.equals(a2))

    println(a1.hashCode())
    println(a2.hashCode())

}
