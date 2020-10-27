package test.misc

fun main() {
    val a1 = A()

    // need kotlin-reflect.jar for this, apparently
    // val a2 = A::class.objectInstance
    println(a1)
    // println(a2)

}

data class A(var x: Int = 10) {
    fun inc() {
        x++
    }
}