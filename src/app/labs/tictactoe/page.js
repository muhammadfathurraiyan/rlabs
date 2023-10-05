"use client";
import Board from "@/components/tictactoe/Board";
import React, { useState } from "react";
import { FaCog } from "react-icons/fa";

const TicTacToe = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
  };

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li className="mt-1" key={move}>
        <button
          className="p-1 bg-zinc-900 rounded-lg"
          onClick={() => jumpTo(move)}
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="w-full min-h-screen gap-8 flex items-center justify-center px-16 py-8 max-sm:px-8">
      <div className="flex flex-col items-center">
        <div className="w-full bg-zinc-800 rounded-xl p-8">
          <h1 className="text-3xl font-bold text-center">TicTacToe</h1>
          <p className="text-center mb-4">
            You can choose to play solo or with friend.
          </p>
          <div className="flex justify-between gap-8">
            <div>
              <Board
                xIsNext={xIsNext}
                squares={currentSquares}
                onPlay={handlePlay}
              />
            </div>
            <div>
              <ol className="">{moves}</ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
