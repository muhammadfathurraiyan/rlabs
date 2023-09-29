"use client";
import React, { useState } from "react";
import { LuBrainCircuit } from "react-icons/lu";

const MindReader = () => {
  const [number, setNumber] = useState();
  return (
    <div className="w-full min-h-screen gap-8 flex items-center justify-center px-16 py-8 max-sm:px-8">
      <div className="p-8 w-80 bg-zinc-800 flex flex-col items-center rounded-2xl">
        <h1 className="text-3xl font-bold">Mind Reader</h1>
        <LuBrainCircuit
          style={{ fontSize: "8rem", textAlign: "center", margin: "2rem" }}
        />
        <form className="flex flex-col items-center gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="mind" className="">
              Think of a number between 0-9
            </label>
            <input
              className="p-2 text-zinc-900 rounded-lg"
              min="0"
              max="9"
              type="number"
              name="mind"
            />
          </div>
          <button
            type="submit"
            className="inline-block py-3 px-5 rounded-xl duration-500 bg-gradient-to-r from-cyan-500 via-cyan-800 to-cyan-500 bg-size-200 hover:bg-pos-0 bg-pos-100"
          >
            Read my mind!
          </button>
        </form>
      </div>
    </div>
  );
};

export default MindReader;
