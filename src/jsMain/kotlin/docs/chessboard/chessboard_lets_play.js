import {highlightCollisions} from "./chessboard_utils.js";

let board = Chessboard('board-letsplay', {
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

let $board = $('#board-letsplay');
highlightCollisions($board, board.position());

function onDrop (source, target, piece, newPos, oldPos, orientation) {
    // block putting two queens on the same field
    if (target in oldPos)
        return 'snapback';

    // update highlighting of safe positions
    highlightCollisions($board, newPos);
}

