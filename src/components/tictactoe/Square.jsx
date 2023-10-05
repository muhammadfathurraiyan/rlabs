import React from "react";

const Square = ({ value, handleSquareClick }) => {
  return (
    <button
      onClick={handleSquareClick}
      className="bg-zinc-900 border p-0 float-left border-zinc-950 text-lg text-center h-16 w-16 leading-[4rem] -mr-px -mt-px"
    >
      {value}
    </button>
  );
};

export default Square;
