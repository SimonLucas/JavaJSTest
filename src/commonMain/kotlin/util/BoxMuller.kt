package util

import kotlin.math.*
import kotlin.random.Random

class BoxMuller (val rand: Random = Random) {
    var saved: Double? = null
    fun nextGaussian() : Double {
        val safe = saved
        if (safe != null) {
            saved = null
            return safe
        } else {
            // need to generate the next two
            // recall BoxMuller generates two per call
            // println("generating")
            val u1 = rand.nextDouble()
            val u2 = rand.nextDouble()
            val r = sqrt(-2.0 * ln(u1))
            val theta = u2 * 2 * PI
            saved = r * sin(theta)
            return r * cos(theta)
        }
    }
}

