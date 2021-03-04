package util

data class RangeMapper (
    val oMin: Double, val oMax: Double,
    val nMin: Double = 0.0, val nMax: Double = 1.0) {

    fun f(x: Double): Double {
        // normalise to zero .. one range
        val y = (x - oMin) / (oMax - oMin)
        // then map to new range
        return nMin + y * (nMax - nMin)
    }
}
