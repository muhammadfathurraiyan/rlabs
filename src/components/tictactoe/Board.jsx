import React from "react";
import Square from "./Square";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const Board = ({ xIsNext, squares, onPlay }) => {
  const handleSquareClick = (index) => {
    if (calculateWinner(squares) || squares[index]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[index] = "X";
    } else {
      nextSquares[index] = "O";
    }
    onPlay(nextSquares);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="mb-2">{status}</div>
      <div className="after:clear-both after:table after:content-none">
        <Square
          value={squares[0]}
          handleSquareClick={() => handleSquareClick(0)}
        />
        <Square
          value={squares[1]}
          handleSquareClick={() => handleSquareClick(1)}
        />
        <Square
          value={squares[2]}
          handleSquareClick={() => handleSquareClick(2)}
        />
      </div>
      <div className="after:clear-both after:table after:content-['']">
        <Square
          value={squares[3]}
          handleSquareClick={() => handleSquareClick(3)}
        />
        <Square
          value={squares[4]}
          handleSquareClick={() => handleSquareClick(4)}
        />
        <Square
          value={squares[5]}
          handleSquareClick={() => handleSquareClick(5)}
        />
      </div>
      <div className="after:clear-both after:table after:content-['']">
        <Square
          value={squares[6]}
          handleSquareClick={() => handleSquareClick(6)}
        />
        <Square
          value={squares[7]}
          handleSquareClick={() => handleSquareClick(7)}
        />
        <Square
          value={squares[8]}
          handleSquareClick={() => handleSquareClick(8)}
        />
      </div>
    </>
  );
};

export default Board;
