"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { LuBrainCircuit } from "react-icons/lu";
import { FaArrowLeft } from "react-icons/fa";

const MindReader = () => {
  const [number, setNumber] = useState(null);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [allItemsDisplayed, setAllItemsDisplayed] = useState(false);
  const [progress, setProgress] = useState(0);
  const [intervalId, setIntervalId] = useState(null); 
  const [buttonClicked, setButtonClicked] = useState(false); 

  const startSlider = () => {
    let nextIndex = currentItemIndex;

    if (intervalId) {
      clearInterval(intervalId);
    }

    const newIntervalId = setInterval(() => {
      nextIndex += 1;

      if (nextIndex >= items.length) {
        setAllItemsDisplayed(true);
        clearInterval(newIntervalId);
      } else {
        setCurrentItemIndex(nextIndex);
        setProgress((prevProgress) => prevProgress + 20);
      }
    }, 1500);

    setIntervalId(newIntervalId);
  };

  useEffect(() => {
    if (buttonClicked) {
      startSlider();
      setButtonClicked(false);
    }
  }, [buttonClicked]);

  const resetSlider = () => {
    clearInterval(intervalId);
    setProgress(0);
    setCurrentItemIndex(0);
    setAllItemsDisplayed(false);
    setButtonClicked(true);
  };

  const items = [
    "",
    "Analyzing brainwaves...",
    "Scanning memories...",
    "Calculating probabillities...",
    "Decoding thoughts...",
    "Done...",
  ];

  const renderContent = () => {
    if (currentItemIndex === 0) {
      return (
        <>
          <label htmlFor="mind">Think of a number between 0-9</label>
          <input
            className="p-2 text-zinc-900 rounded-lg"
            min="0"
            max="9"
            onChange={(e) => setNumber(e.target.value)}
            type="number"
            name="mind"
          />
        </>
      );
    } else {
      return allItemsDisplayed ? (
        <div className="flex flex-col items-center">
          {number === null ? (
            <p className="text-center">
              I know it's just a trick but please input the number (T_T)
            </p>
          ) : (
            <>
              <p className="text-center">
                You're thinking of the number {number}
              </p>
              <img
                className="w-1/2"
                loading="lazy"
                src="https://media.tenor.com/bN0hO7r_M40AAAAd/laughing-laughing-hysterically.gif"
              />
              <p className="text-center">
                and congratulations you've been trolled🤣.
              </p>
            </>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-1 ">
          <p>{items[currentItemIndex]}</p>
          <div className="w-full h-2 bg-white rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 via-cyan-800 to-cyan-500 bg-size-200"
              style={{ width: `${progress}%`, transition: "width 1.5s" }}
            ></div>
          </div>
        </div>
      );
    }
  };

  const renderButton = ({ number }) => {
    if (currentItemIndex === 0) {
      return number <= 9 ? (
        <button
          onClick={resetSlider}
          className="inline-block py-3 px-5 rounded-xl duration-500 bg-gradient-to-r from-cyan-500 via-cyan-800 to-cyan-500 bg-size-200 hover:bg-pos-0 bg-pos-100"
        >
          Read my mind!
        </button>
      ) : (
        <p className="text-red-500 text-center">
          Can't read your mind, think a number between 0-9 😡.
        </p>
      );
    } else {
      return (
        <button
          onClick={() => {
            setCurrentItemIndex(0), setNumber(null);
          }}
          className="inline-block py-3 px-5 rounded-xl duration-500 bg-gradient-to-r from-cyan-500 via-cyan-800 to-cyan-500 bg-size-200 hover:bg-pos-0 bg-pos-100"
        >
          Back
        </button>
      );
    }
  };

  return (
    <div className="w-full min-h-screen gap-8 flex items-center justify-center px-16 py-8 max-sm:px-8">
      <Link
        className="fixed font-semibold top-0 left-24 max-sm:left-8 flex items-center gap-2 text-lg hover:text-cyan-500 duration-300"
        href="/labs"
      >
        <FaArrowLeft /> Back to the future🚀.
      </Link>
      <div className="p-8 w-80 bg-zinc-800 flex flex-col items-center rounded-2xl">
        <h1 className="text-3xl font-bold">Mind Reader</h1>
        <LuBrainCircuit
          style={{ fontSize: "8rem", textAlign: "center", margin: "2rem" }}
        />
        <div className="w-full flex flex-col items-center gap-4">
          <div className="w-full flex flex-col gap-1">{renderContent()}</div>
          {renderButton({ number: number })}
        </div>
      </div>
    </div>
  );
};

export default MindReader;
