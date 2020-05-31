package util

/**
 * Not yet worked out a good platform independent solution
 */

class ElapsedTimer {
    // allows for easy reporting of elapsed time
    internal var oldTime: Long = 0

    init {
        // oldTime = getTimeMillis()
    }

//    fun elapsed(): Long {
//        return getTimeMillis() - oldTime
//    }
//
//    fun reset() {
//        oldTime = getTimeMillis()
//    }

//    override fun toString(): String {
//        // now resets the timer...
//        val ret = elapsed().toString() + " ms elapsed"
//        reset()
//        return ret
//    }

}
