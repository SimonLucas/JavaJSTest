package util

class URLUtil {
    // fun test = URL("")
    fun getParams(url: String) : HashMap<String,String> {
        val map = HashMap<String,String>()
        val paramSplit = url.split("?")
        try {
            val paramString = paramSplit[1]
            val pairs = paramString.split("&")
            for (pair in pairs) {
                val kv = pair.split("=")
                map[kv[0]] = kv[1]
            }
            return map
        } catch (e: Exception) {
            println(e)
            return map
        }
    }

    fun setParams(base: String, map: Map<String,String>) : String {
        return base.split("?")[0] + "?" + paramString(map)
    }

    fun paramString(map: Map<String,String>) : String {
        val sb = StringBuilder()
        for ((k,v) in map) {
            val kvs = k + "=" + v
            if (sb.length == 0)
                sb.append(kvs)
            else
                sb.append("&"+kvs)
        }
        return sb.toString()
    }
}
