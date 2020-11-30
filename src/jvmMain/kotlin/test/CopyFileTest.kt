package test

import java.io.File

fun main() {

    File(".//build/js/packages/JavaJSTest/kotlin/JavaJSTest.js").copyTo(
        File("./src/jsMain/kotlin/docs/JavaJSTest.js"),
        overwrite = true
    )
    File("./build/js/packages/JavaJSTest/kotlin/JavaJSTest.js.map").copyTo(
        File("./src/jsMain/kotlin/docs/JavaJSTest.js.map"),
        overwrite = true
    )
    File(".//build/js/packages/JavaJSTest/kotlin/JavaJSTest.js").copyTo(
        File("./src/jsMain/kotlin/sample/JavaJSTest.js"),
        overwrite = true
    )
    File("./build/js/packages/JavaJSTest/kotlin/JavaJSTest.js.map").copyTo(
        File("./src/jsMain/kotlin/sample/JavaJSTest.js.map"),
        overwrite = true
    )
}

//     from("/build/js/packages/JavaJSTest/kotlin/JavaJSTest.js")
//    into("/src/jsMain/kotlin/docs")