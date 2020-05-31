package test

import java.awt.GraphicsEnvironment


fun main(args: Array<String>) {
    val e = GraphicsEnvironment.getLocalGraphicsEnvironment()
    for (font in e.availableFontFamilyNames) {
        println(font)
    }
}
