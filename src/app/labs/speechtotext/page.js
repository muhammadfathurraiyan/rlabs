"use client";
import "regenerator-runtime/runtime";
import BackButton from "@/components/global/BackButton";
import { HiLanguage } from "react-icons/hi2";
import { BsMicFill, BsMicMuteFill } from "react-icons/bs";
import { useState } from "react";
import { useSpeechRecognition } from "react-speech-recognition";
import SpeechRecognition from "react-speech-recognition";

const SpeechToText = () => {
  const [lang, setLang] = useState("id");

  const langHandler = (e) => {
    setLang(e.target.value);
  };

  const copyHandler = () => {
    navigator.clipboard.writeText(transcript);
  };

  const {
    transcript,
    interimTranscript,
    finalTranscript,
    resetTranscript,
    listening,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
  } = useSpeechRecognition();

  const activeHandler = () => {
    if (!listening) {
      SpeechRecognition.startListening({
        continues: true,
        language: lang,
      });
    } else {
      SpeechRecognition.stopListening();
    }
  };

  console.log(lang);

  return (
    <div className="w-full min-h-screen gap-8 flex items-center justify-center px-16 py-8 max-sm:px-8">
      <BackButton />
      <div className="flex flex-col bg-zinc-800 rounded-xl p-6">
        <h1 className="text-3xl font-bold text-center">Speech To Text</h1>
        <p className="text-center">Let the system writes for you.</p>
        <div className="flex justify-end">
          <div className="flex items-center justify-end gap-2 mt-8 p-2 rounded-lg bg-zinc-900">
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
        <div className="mt-4 w-[50vw] flex flex-col items-center gap-4">
          <textarea
            rows="13"
            placeholder="your texts will apear here..."
            className="text-zinc-800 w-full p-2 resize-none rounded-lg"
            value={transcript}
            defaultValue=""
          />
          <div className="flex items-center gap-8">
            <button
              onClick={resetTranscript}
              className="p-2 hover:p-3 duration-300 text-yellow-500 border-2 border-yellow-500 rounded-xl"
            >
              Reset
            </button>
            <button
              onClick={activeHandler}
              className="p-4 text-2xl hover:p-5 duration-300 rounded-full border-2 text-cyan-500 border-cyan-500"
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
