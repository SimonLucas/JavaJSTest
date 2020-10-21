package test

import util.URLUtil
import java.net.URI
import java.net.URL

fun main() {
    val url = "http://simon.ai?hello=12&goodbye=twenty"
    // val uri = URI(scheme = "http://simon.ai", query = "hello=12")
    // uri.
    // url.query = "hello"
    // val builder = Uri.
    println(URLUtil().getParams(url))

    println(url.split("?"))
    println(url.split(("M")))

    val map2 = hashMapOf<String,String>("hello" to "333", "game" to "Othello")
    println(URLUtil().setParams(url, map2))
}
