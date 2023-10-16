"use client";
import BackButton from "@/components/global/BackButton";
import { useState } from "react";

const Joker = () => {
  const [jokes, setJokes] = useState({
    firstLine: "ksi forhead",
    secondLine: "",
  });
  const jokeHandler = async () => {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any");
    const jokes = await response.json();
    if (jokes.joke) {
      setJokes({ firstLine: jokes.joke, secondLine: "" });
    } else {
      setJokes({ firstLine: jokes.setup, secondLine: jokes.delivery });
    }
  };

  return (
    <div className="w-full min-h-screen gap-8 flex items-center justify-center px-16 py-8 max-sm:px-8">
      <BackButton />
      <div className="p-8 bg-zinc-800 flex flex-col items-center rounded-2xl">
        <h1 className="text-3xl font-bold">Joker</h1>
        <p>Everyone needs some laugh.</p>
        <div className="flex flex-col items-center mt-4 gap-4">
          <div className="w-[500px] h-fit p-2 border-2 border-zinc-950 rounded-lg bg-zinc-900">
            <p>{jokes.firstLine}</p>
            <p>{jokes.secondLine}</p>
          </div>
          <button
            onClick={jokeHandler}
            className="inline-block py-3 px-5 rounded-xl duration-500 bg-gradient-to-r from-cyan-500 via-cyan-800 to-cyan-500 bg-size-200 hover:bg-pos-0 bg-pos-100"
          >
            Next Joke
          </button>
        </div>
      </div>
    </div>
  );
};

export default Joker;
