package util


class Picker<T> (val order:Int = MAX_FIRST) {

    var best: T? = null
    var bestScore: Double? = null
    var nItems: Int = 0

    init {
        reset()
    }

    fun add(score: Double, value: T) {
        // each value must be unique: keep it in the set of values
        // and throw an exception if violated

        if (best == null) {
            bestScore = score
            best = value
        } else {
            if (order * score > bestScore!! * order) {
                bestScore = score
                best = value
            }
        }
        nItems++
    }

    fun reset() {
        nItems = 0
        bestScore = null
    }

    override fun toString(): String {
        return "Picker: $best : $bestScore"
    }

    companion object {
        val MAX_FIRST = 1
        val MIN_FIRST = -1
    }
}
