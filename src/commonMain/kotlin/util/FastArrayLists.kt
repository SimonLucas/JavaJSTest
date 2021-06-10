package util

class IntArrayList (val initialSize: Int = 10, val growthFactor: Double = 2.0) : Iterable<Int> {
    var a = IntArray(initialSize)
    var size = 0

    fun add(x: Int) {
        if (size >= a.size) grow()
        a[size] = x
        size++
    }

    private fun grow() {
        val ca = IntArray((size * growthFactor).toInt())
        repeat(size) {
            ca[it] = a[it]
        }
        a = ca
    }

    operator fun get(ix: Int) : Int {
        if (ix < size) return a[ix]
        else throw IndexOutOfBoundsException("$ix >= array size $size")
    }

    override fun iterator(): Iterator<Int> {
        return IntArrayListIterator(this)
    }

    class IntArrayListIterator(val a: IntArrayList) : Iterator<Int> {
        var ix = 0
        override fun hasNext() = ix < a.size

        override fun next(): Int {
            val x = a[ix]
            ix++
            return x
        }
    }
}

class DoubleArrayList (val initialSize: Int = 10, val growthFactor: Double = 2.0) : Iterable<Double> {
    var a = DoubleArray(initialSize)
    var size = 0

    fun add(x: Double) {
        if (size >= a.size) grow()
        a[size] = x
        size++
    }

    private fun grow() {
        val ca = DoubleArray((size * growthFactor).toInt())
        repeat(size) {
            ca[it] = a[it]
        }
        a = ca
    }

    operator fun get(ix: Int): Double {
        if (ix < size) return a[ix]
        else throw IndexOutOfBoundsException("$ix >= array size $size")
    }

    override fun iterator(): Iterator<Double> {
        return DoubleArrayListIterator(this)
    }

    class DoubleArrayListIterator(val a: DoubleArrayList) : Iterator<Double> {
        var ix = 0
        override fun hasNext() = ix < a.size

        override fun next(): Double {
            val x = a[ix]
            ix++
            return x
        }
    }
}
