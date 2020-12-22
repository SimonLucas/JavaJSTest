import {position_to_column_vector, field_to_index, index_to_field, example_positions, column_vector_to_position,
    random_vector, createVector, index_to_col_name} from "./chessboard_utils.js";

initializeBoards([
    ["board-vector-mutation-1", "#vector-mutation-1"],
    ["board-vector-mutation-2", "#vector-mutation-2"],
    ["board-vector-mutation-3", "#vector-mutation-3"]
]);

function initializeBoards(boardContainers){
    for (let i in boardContainers) {
        let boardContainer = boardContainers[i][0];
        let vectorContainer = boardContainers[i][1];
        let randomPosition = random_vector();
        //console.log(randomPosition)

        //console.log(boardContainer);
        let board = Chessboard(boardContainer, {
            draggable: false,
            position: column_vector_to_position(randomPosition),
            showNotation: false,
        });
        let table = createVector(position_to_column_vector(board.position()), vectorContainer);
        $("div", table).click(function(){ mutateQueen(this, board);});
    }
}

function mutateQueen(field, board){
    let row = field.innerHTML;
    let column = index_to_col_name[field.getAttribute("childindex")];
    let field_before = column + row;

    let new_row = 8- Math.floor(Math.random() * 8);
    while (new_row === row){
        new_row = 8- Math.floor(Math.random() * 8);
    }
    let field_after = column + new_row;

    let position = board.position();

    delete position[field_before]; // update board
    position[field_after] = "bQ";
    field.innerHTML = new_row; // update matrix
    board.position(position);
}







