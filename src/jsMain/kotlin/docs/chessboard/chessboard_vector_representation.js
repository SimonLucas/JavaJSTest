import {position_to_column_vector, field_to_index, index_to_field} from "./chessboard_utils.js";

initializeBoards([
    ["board-vector-example-1", "#board-vector-1"],
    ["board-vector-example-2", "#board-vector-2"],
    ["board-vector-example-3", "#board-vector-3"]
]);


function initializeBoards(boardContainers){
    for (let i in boardContainers) {
        let boardContainer = boardContainers[i][0];
        let vectorContainer = boardContainers[i][1];
        console.log(boardContainer);
        let board = Chessboard(boardContainer, {
            draggable: false,
            position: {
                a1: "bQ",
                b2: "bQ",
                c3: "bQ",
                d4: "bQ",
                e5: "bQ",
                f6: "bQ",
                g7: "bQ",
                h8: "bQ",
            },
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







