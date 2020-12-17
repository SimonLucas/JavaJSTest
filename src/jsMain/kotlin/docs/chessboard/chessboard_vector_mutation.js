import {position_to_column_vector, field_to_index, index_to_field, example_positions} from "./chessboard_utils.js";

initializeBoards([
    ["board-vector-mutation-1", "#vector-mutation-1"],
    ["board-vector-mutation-2", "#vector-mutation-2"],
    ["board-vector-mutation-3", "#vector-mutation-3"]
]);

function initializeBoards(boardContainers){
    for (let i in boardContainers) {
        let boardContainer = boardContainers[i][0];
        let vectorContainer = boardContainers[i][1];
        console.log(boardContainer);
        let board = Chessboard(boardContainer, {
            draggable: false,
            position: example_positions[i],
            showNotation: false,
        });
        let table = createVector(position_to_column_vector(board.position()), vectorContainer);
    }
}

function createVector(tableData, target) {
    let table = document.createElement('table');
    let tableBody = document.createElement('tbody');

    let i = 0;
    tableData.forEach(function(rowData) {
        let cell = document.createElement('div');
        cell.appendChild(document.createTextNode(rowData));
        cell.setAttribute("childIndex", i);
        tableBody.appendChild(cell);
        i = i+1;
    });

    table.appendChild(tableBody);
    $(target)[0].appendChild(table);
    return table;
}







