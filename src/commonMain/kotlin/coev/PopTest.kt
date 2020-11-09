package coev

fun main() {
    val pt = PopTest()
}

class PopTest {


    fun compete(gs: GameState, s1: Seq, s2: Seq) : Double {
        // play s1 against s2 and find the winner
        var state = gs.copy() as GameState
        var ix1=0
        var ix2=0

        while (!state.isTerminal(state.toMove())) {

        }

        return state.score(state.toMove())

    }
}