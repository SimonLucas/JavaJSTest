import {squareClass, position_to_binary_board, field_to_index, index_to_field} from "./chessboard_utils.js";

// setup board
let board = Chessboard('board-for-matrix-representation', {
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
});
let $board = $('#board-for-matrix-representation');

// add on click event to toggle queens on a field
$board.find('.' + squareClass).click(function(){ toggleQueenOnBoard(board, this, "#board-matrix-representation"); });

// create matrix representation
let matrix = createMatrix(position_to_binary_board(board.position())[0], "#board-matrix-representation");
$("div", matrix).click(function(){ toggleQueenOnMatrix(this, board);});


/**
 *
 * @param board
 * @param chessfield
 * @param linkedmatrix
 */
function toggleQueenOnBoard(board, chessfield, linkedmatrix){
    const field = chessfield.getAttribute("data-square");
    const position = board.position();
    let divIndex = field_to_index(field);

    if (field in position)
    {
        delete position[field]; // update board
        $(linkedmatrix).find("div")[divIndex].innerHTML = 0; // update matrix
    }
    else
    {
        position[field] = "bQ"; // update board
        $(linkedmatrix).find("div")[divIndex].innerHTML = 1; // update matrix
    }
    board.position(position);
}

/**
 *
 * @param diffield
 * @param board
 */
function toggleQueenOnMatrix(diffield, board) {
    const index = diffield.getAttribute("childindex");
    const position = board.position();
    let field = index_to_field(index);

    if (field in position)
    {
        delete position[field]; // update board
        diffield.innerHTML = 0; // update matrix
    }
    else
    {
        position[field] = "bQ"; // update board
        diffield.innerHTML = 1; // update matrix
    }
    board.position(position);
}

/**
 *
 * @param tableData
 * @param tableContainer
 * @returns {HTMLTableElement}
 */
function createMatrix(tableData, tableContainer) {
    var matrix = document.createElement('table');
    var tableBody = document.createElement('tbody');

    let i = 0;
    tableData.forEach(function(rowData) {
        rowData.forEach(function(cellData) {
            var cell = document.createElement('div');
            cell.appendChild(document.createTextNode(cellData));
            cell.setAttribute("childIndex", i);
            tableBody.appendChild(cell);
            i = i+1;
        });

        //tableBody.appendChild(row);
    });

    matrix.appendChild(tableBody);
    $(tableContainer)[0].appendChild(matrix);
    return matrix;
}

