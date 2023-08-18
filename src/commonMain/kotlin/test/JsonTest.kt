package test

import kotlinx.serialization.*
import kotlinx.serialization.json.*

@Serializable
data class Person(val name: String, val age: Int, val email: String)

fun main() {
    val json = Json { prettyPrint = true }

    // Convert Kotlin data class to JSON
    val person = Person(name = "Alice", age = 30, email = "alice@example.com")
    val jsonString = json.encodeToString(person)
    println("JSON String: $jsonString")

    // Convert JSON back to Kotlin data class
    val jsonInput = """{"name":"Bob","age":25,"email":"bob@example.com"}"""
    val personFromJson = json.decodeFromString<Person>(jsonInput)
    println("Data class from JSON: $personFromJson")
}
