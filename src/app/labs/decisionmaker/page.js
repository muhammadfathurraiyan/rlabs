"use client";
import BackButton from "@/components/global/BackButton";
import axios from "axios";
import { useState } from "react";
import { motion } from "framer-motion";

const answerVariants = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { ease: "easeInOut", duration: "0.3ms", type: "spring" },
  },
};

const DecisionMaker = () => {
  const [input, setInput] = useState();
  const [output, setOutput] = useState();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleBack = () => {
    setOutput(null);
    document.getElementById("inputform").reset();
  };

  const handleClick = async ({ input }) => {
    apiCall(
      `what is the sentiment of this tweet = "${input}", answer with "Positive" or "Negative" or "Neutral", do not answer anything else.`
    );
  };

  const apiCall = async (data) => {
    const responese = await axios.post(
      `https://deungo-server.vercel.app/api/${data}`
    );
    setOutput(responese.data);
  };

  const Answer = ({ output }) => {
    switch (output) {
      case "Positive":
        return (
          <motion.p
            variants={answerVariants}
            initial="initial"
            animate="animate"
            className="text-green-500 border-2 border-green-500 p-2 rounded-lg"
          >
            {output}
          </motion.p>
        );
        break;
      case "Negative":
        return (
          <motion.p
            variants={answerVariants}
            initial="initial"
            animate="animate"
            className="text-red-500 border-2 border-red-500 p-2 rounded-lg"
          >
            {output}
          </motion.p>
        );
        break;
      case "Neutral":
        return (
          <motion.p
            variants={answerVariants}
            initial="initial"
            animate="animate"
            className="text-cyan-500 border-2 border-cyan-500 p-2 rounded-lg"
          >
            {output}
          </motion.p>
        );
        break;
      default:
        <motion.p variants={answerVariants} initial="initial" animate="animate">
          {output}
        </motion.p>;
    }
  };

  return (
    <div className="w-full min-h-screen gap-8 flex items-center justify-center px-16 py-8 max-sm:px-8">
      <BackButton />
      <div className="p-8 bg-zinc-800 flex flex-col items-center rounded-2xl">
        <h1 className="text-3xl font-bold">Decision Maker</h1>
        <p>Confused about making a decision? try this one.</p>
        <div className="w-full flex flex-col items-center mt-4 gap-4">
          <form id="inputform" action="" className="w-full flex flex-col gap-1">
            <label className="text-sm" htmlFor="mind">
              Type eveything and get the answer.
            </label>
            <input
              className="p-2 text-zinc-900 rounded-lg"
              min="0"
              max="9"
              type="text"
              name="mind"
              onChange={handleInput}
              placeholder="am i handsome?"
            />
          </form>
          <Answer output={output} />
          {!output ? (
            <button
              onClick={() => {
                handleClick({ input: input });
              }}
              className="inline-block py-3 px-5 rounded-xl duration-500 bg-gradient-to-r from-cyan-500 via-cyan-800 to-cyan-500 bg-size-200 hover:bg-pos-0 bg-pos-100"
            >
              Process
            </button>
          ) : (
            <button
              onClick={handleBack}
              className="inline-block py-3 px-5 rounded-xl duration-500 bg-gradient-to-r from-cyan-500 via-cyan-800 to-cyan-500 bg-size-200 hover:bg-pos-0 bg-pos-100"
            >
              Back
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DecisionMaker;
