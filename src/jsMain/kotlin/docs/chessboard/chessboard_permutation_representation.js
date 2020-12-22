import {position_to_column_vector, field_to_index, index_to_field, example_positions, createVector} from "./chessboard_utils.js";

initializeBoards([
    ["board-vector-example-1", "#board-vector-1"],
    ["board-vector-example-2", "#board-vector-2"],
    ["board-vector-example-3", "#board-vector-3"]
]);

function initializeBoards(boardContainers){
    for (let i in boardContainers) {
        let boardContainer = boardContainers[i][0];
        let vectorContainer = boardContainers[i][1];
        //console.log(boardContainer);
        let board = Chessboard(boardContainer, {
            draggable: false,
            position: example_positions[i],
            showNotation: false,
        });
        let table = createVector(position_to_column_vector(board.position()), vectorContainer);
    }
}








