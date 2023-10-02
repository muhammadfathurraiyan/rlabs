"use client";
import "regenerator-runtime/runtime";
import BackButton from "@/components/global/BackButton";
import { HiLanguage } from "react-icons/hi2";
import { BsMicFill, BsMicMuteFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useSpeechRecognition } from "react-speech-recognition";
import SpeechRecognition from "react-speech-recognition";

const SpeechToText = () => {
  const [lang, setLang] = useState("id");
  const [text, setText] = useState("");
  const { finalTranscript, resetTranscript, listening } =
    useSpeechRecognition();

  useEffect(() => {
    if (finalTranscript !== "") {
      setText(`${text} ${finalTranscript}`);
      resetTranscript();
    }
  }, [finalTranscript, resetTranscript]);

  const langHandler = (e) => {
    setLang(e.target.value);
  };

  const textHandler = (e) => {
    setText(e.target.value);
  };

  const copyHandler = () => {
    navigator.clipboard.writeText(text);
  };

  const activeHandler = () => {
    if (!listening) {
      SpeechRecognition.startListening({
        continuous: true,
        language: lang,
      });
    } else {
      SpeechRecognition.stopListening();
    }
  };

  return (
    <div className="w-full min-h-screen gap-8 flex items-center justify-center px-16 py-8 max-sm:px-8">
      <BackButton />
      <div className="flex flex-col w-3/5 max-sm:w-full bg-zinc-800 rounded-xl p-6">
        <h1 className="text-3xl font-bold text-center">Speech To Text</h1>
        <p className="text-center">Let the system writes for you.</p>
        <div className="flex justify-end">
          <div className="flex items-center justify-end gap-2 mt-2 p-2 rounded-lg bg-zinc-900 border-2 border-zinc-950">
            <label htmlFor="lang">
              <HiLanguage style={{ fontSize: "2rem" }} />
            </label>
            <select
              value={lang}
              onChange={langHandler}
              className="text-zinc-900 p-1"
            >
              <option value="id">Indonesian</option>
              <option value="en-US">English</option>
            </select>
          </div>
        </div>
        <div className="mt-4 flex flex-col items-center gap-4">
          <textarea
            id="textArea"
            rows="13"

            placeholder="your text will appear here..."
            className="text-zinc-100 w-full p-2 resize-none border-2 border-zinc-950 rounded-lg bg-zinc-900"
            value={text}
            onChange={textHandler}
          ></textarea>
          <div className="flex items-center gap-8">
            <button
              onClick={() => setText("")}
              className="p-2 hover:p-3 duration-300 text-yellow-500 border-2 border-yellow-500 rounded-xl"
            >
              Reset
            </button>
            <button
              onClick={activeHandler}
              className={`p-4 text-2xl hover:p-5 duration-300 rounded-full border-2 ${
                listening
                  ? "text-red-500 border-red-500"
                  : "text-cyan-500 border-cyan-500"
              }`}
            >
              {listening ? <BsMicMuteFill /> : <BsMicFill />}
            </button>
            <button
              onClick={copyHandler}
              className="p-2 hover:p-3 duration-300 text-green-500 border-2 border-green-500 rounded-xl"
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeechToText;
