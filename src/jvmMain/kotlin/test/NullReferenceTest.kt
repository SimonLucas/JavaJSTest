package test


fun main() {
    val valRef = NullReferenceValTest(x=null)
    if (valRef.x != null)
        print(valRef.x * 2)

//    val varRef = NullReferenceVarTest(x=null)
//    if (varRef.x != null)
//        print(varRef.x * 2)
}

data class NullReferenceValTest (val x:Int?)

data class NullReferenceVarTest (var x:Int?)


