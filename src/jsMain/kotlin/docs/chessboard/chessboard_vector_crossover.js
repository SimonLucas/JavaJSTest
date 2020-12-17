import {position_to_column_vector, field_to_index, index_to_field, example_positions, column_vector_to_position,
    random_vector, createVector, index_to_col_name} from "./chessboard_utils.js";

let boards = initializeBoards([
    ["board-vector-crossover-1", "#vector-crossover-1"],
    ["board-vector-crossover-2", "#vector-crossover-2"],
    ["board-vector-crossover-3", "#vector-crossover-3"],
]);


// initialize crossover result
createVector(position_to_column_vector(boards[0].position()), "#vector-crossover-1b");
createVector(position_to_column_vector(boards[1].position()), "#vector-crossover-2b");

function initializeBoards(boardContainers){
    let boards = [];
    for (let i in boardContainers) {
        let boardContainer = boardContainers[i][0];
        let vectorContainer = boardContainers[i][1];
        let randomPosition = random_vector();
        console.log(randomPosition)

        console.log(boardContainer);
        let board = Chessboard(boardContainer, {
            draggable: false,
            position: column_vector_to_position(randomPosition),
            showNotation: false,
        });
        let table = createVector(position_to_column_vector(board.position()), vectorContainer);
        $("div", table).click(function(){ mutateQueen(this, board);});
        boards[i] = board;
    }
    return boards;
}








