var board;
const col_name_to_index = {
    "a": 0,
    "b": 1,
    "c": 2,
    "d": 3,
    "e": 4,
    "f": 5,
    "g": 6,
    "h": 7,
};

const index_to_col_name = {
    0 : "a",
    1 : "b",
    2 : "c",
    3 : "d",
    4 : "e",
    5 : "f",
    6 : "g",
    7 : "h",
};

var squareClass = 'square-55d63';

board = Chessboard('board1', {
    draggable: true,
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
    onDrop: onDrop
});
var $board = $('#board1')
addColours(board.position());


var board2 = Chessboard('board2', {
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
var $board2 = $('#board2')
$board2.find('.' + squareClass).click(function(){ toggleQueenOnBoard(this, board2); });



var board3 = Chessboard('board3', {
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
var $board3 = $('#board3')

var board4 = Chessboard('board4', {
    draggable: false,
    position: {
        a4: "bQ",
        b4: "bQ",
        c4: "bQ",
        d4:  "bQ",
        e5: "bQ",
        f5: "bQ",
        g5: "bQ",
        h5: "bQ",
    },
    showNotation: false,
});
var $board4 = $('#board4')

var board5 = Chessboard('board5', {
    draggable: false,
    position: {
        a6: "bQ",
        b2: "bQ",
        c8: "bQ",
        d4: "bQ",
        e5: "bQ",
        f1: "bQ",
        g7: "bQ",
        h5: "bQ",
    },
    showNotation: false,
});
var $board5 = $('#board5')

createVector(to_vector_board(board3.position()), "#boardVector3");
createVector(to_vector_board(board4.position()), "#boardVector4");
createVector(to_vector_board(board5.position()), "#boardVector5");



function createVector(tableData, target) {
  var table = document.createElement('table');
  var tableBody = document.createElement('tbody');

  let i = 0;
  tableData.forEach(function(rowData) {
      var cell = document.createElement('div');
      cell.appendChild(document.createTextNode(rowData));
      cell.setAttribute("childIndex", i);
      tableBody.appendChild(cell);
      i = i+1;
  });

  table.appendChild(tableBody);
  var x = $(target);
  x[0].appendChild(table);
  $("div", table).click(function(){ toggleQueenOnMatrix(this, board2);});
}

function createTable(tableData) {
  var table = document.createElement('table');
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

  table.appendChild(tableBody);
  var x = $('#board2Matrix');
  x[0].appendChild(table);
  $("div", table).click(function(){ toggleQueenOnMatrix(this, board2);});
}

createTable(to_binary_board(board2.position())[0]);


function toggleQueenOnBoard(chessfield){
    const field = chessfield.getAttribute("data-square");
    const position = board2.position();
    let divIndex = field_to_index(field);

    if (field in position)
    {
        delete position[field];
        $('#board2Matrix').find("div")[divIndex].innerHTML = 0;
    }
    else
    {
        position[field] = "bQ";
        $('#board2Matrix').find("div")[divIndex].innerHTML = 1;
    }
    board2.position(position);
}

function toggleQueenOnMatrix(diffield, board) {
    const index = diffield.getAttribute("childindex");
    const position = board.position();
    let field = index_to_field(index);

    if (field in position)
    {
        delete position[field];
        diffield.innerHTML = 0;
    }
    else
    {
        position[field] = "bQ";
        diffield.innerHTML = 1;
    }
    board.position(position);
}

function field_to_index(fieldname){
    let row = 8 - parseInt(fieldname[1]);
    let col = col_name_to_index[fieldname[0]];
    console.log(row, col, );
    return row*8+col;
}

function index_to_field(index){
    let row = 8 - Math.floor(index/8) ;
    let col = index_to_col_name[index%8];
    return col+row;
}

function onDrop (source, target, piece, newPos, oldPos, orientation) {
    if (target in oldPos)
        return 'snapback';

    addColours(newPos);
}

function addColours(position) {
    console.log("adding colors");
    // transfer to binary board
    const [binary_board, unsafe_positions, safe_positions] = to_binary_board(position);

    // find all squared to be highlighted
    $board.find('.' + squareClass).removeClass('highlight-red');
    $board.find('.' + squareClass).removeClass('highlight-green');
    for (let pos in unsafe_positions){
        $board.find('.' + squareClass+".square-"+unsafe_positions[pos]).addClass('highlight-red')
    }
    for (let pos in safe_positions){
        $board.find('.' + squareClass+".square-"+safe_positions[pos]).addClass('highlight-green')
    }
}

function to_binary_board(newPos){
    var binary_board=[];
    for(let i=0; i<8; i++){
        binary_board[i]=[];
        for(let j=0; j<8; j++){
            binary_board[i][j]=0;
        }
    }

    for (let pos in newPos){
        let row = 8-parseInt(pos[1]);
        let col = col_name_to_index[pos[0]];
        binary_board[row][col] = 1;
    }

    let unsafe_positions = [];
    let safe_positions = [];
    let i = 0;
    let j = 0;
    for (let pos in newPos) {
        let row = 8 - parseInt(pos[1]);
        let col = col_name_to_index[pos[0]];
        if (!isSafe(binary_board, row, col)){
            unsafe_positions[i] = pos;
            i++;
        } else {
            safe_positions[j] = pos;
            j++;
        }
    }

    return [binary_board, unsafe_positions, safe_positions];
}

function to_vector_board(newPos){
    let binary_board = to_binary_board(newPos)[0];
    let vector_board = []
    for(let i=0; i<8; i++){
        vector_board[i] = 0
        for(let j=0; j<8; j++){
            if (binary_board[j][i]==1)
            {
                vector_board[i] = 8-j;
            }
        }
    }
    return vector_board;
}

function isSafe(binary_board, row, col){

    // Checks left and right
    for(let i=0; i<8; i++){
        if (i === col)
            continue;
        if (binary_board[row][i] === 1) {
            return false;
        }
    }

    // Checks up and down
    for(let j=0; j<8; j++){
        if (j === row)
            continue;
        if (binary_board[j][col] === 1) {
            return false;
        }
    }

    // Checks the ↖ direction
    for(let i=row-1, j=col-1; i>=0 && j>=0; i--, j--){
        if (binary_board[i][j] === 1) {
            return false;
        }
    }
    for(let i=row+1, j=col+1; i<8 && j<8; i++, j++){
        if (binary_board[i][j] === 1) {
            return false;
        }
    }

    // Checks the ↙ direction
    for(let i=row+1, j=col-1; j>=0 && i<8; i++, j--){
        if (binary_board[i][j] === 1){
            return false;
        }
    }
    for(let i=row-1, j=col+1; i>=0 && j<8; i--, j++){
        if (binary_board[i][j] === 1){
            return false;
        }
    }

    return true;
}
