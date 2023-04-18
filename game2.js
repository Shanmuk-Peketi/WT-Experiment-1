const board = document.getElementById("game-board");
const status = document.getElementById("status");
let currentPlayer = "S";
let gameOver = false;

function createSquare() {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("click", () => {
    if (!gameOver && square.innerHTML === "") {
      square.innerHTML = currentPlayer;
      if (checkWin()) {
        gameOver = true;
        status.innerHTML = `${currentPlayer} wins!`;
      } else if (checkDraw()) {
        gameOver = true;
        status.innerHTML = "Draw!";
      } else {
        currentPlayer = currentPlayer === "S" ? "O" : "S";
        status.innerHTML = `Player ${currentPlayer}'s turn`;
      }
    }
  });
  return square;
}

function createBoard() {
  for (let i = 0; i < 9; i++) {
    const square = createSquare();
    board.appendChild(square);
  }
}

function checkWin() {
  const squares = document.getElementsByClassName("square");
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < wins.length; i++) {
    const [a, b, c] = wins[i];
    if (
      squares[a].innerHTML !== "" &&
      squares[a].innerHTML === squares[b].innerHTML &&
      squares[b].innerHTML === squares[c].innerHTML
    ) {
      return true;
    }
  }
  return false;
}

function checkDraw() {
  const squares = document.getElementsByClassName("square");
  for (let i = 0; i < squares.length; i++) {
    if (squares[i].innerHTML === "") {
      return false;
    }
  }
 
}