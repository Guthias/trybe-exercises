// Source: https://www.chess.com/terms/chess-pieces

let piece = "PAWN";
let move;

switch (piece.toLowerCase()) {
  case "pawn":
    move = "Pawn: One move forward (possible two when didn't moved yet) and just can attack in diagonal"
  break;

  case "bishop":
    move = "Bishop: Diagonals how many squares as it likes"
  break;

  case "knight":
    move = "Knight: L-shape with it being two squares horizontally or vertically and after go to left or right (knight jump first two squares)"
  break;

  case "rook":
    move = "Rook: Horizontally or vertically how many squares as it likes"
  break;

  case "queen":
    move = "Queen: Horizontally, vertically or diagonals how many squares as it likes"
  break;

  case "king":
    move = "King: Horizontally, vertically or diagonals just 1 square"
  break;

  default:
    console.log("Invalid piece");
}

if (move != undefined){
  console.log(move);
}


