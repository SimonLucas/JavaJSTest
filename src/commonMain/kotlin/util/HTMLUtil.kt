package util


class InputFormBuilder {



}

class Para(var id:String, var body: String) {
    fun getHtml() : String {
        return "<p>$body</p>"
    }
}

class IntField (var id: String, var value: Int = 0){
    fun getHtml() : String {
        return "<input type=\"number\" id=\"$id\" value=\"$value\" />\n"
    }
}
