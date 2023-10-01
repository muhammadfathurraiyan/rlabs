import BackButton from "@/components/global/BackButton";
import { HiLanguage, HiMicrophone } from "react-icons/hi2";
import { BsMicFill, BsMicMuteFill } from "react-icons/bs";

const SpeechToText = () => {
  return (
    <div className="w-full min-h-screen gap-8 flex items-center justify-center px-16 py-8 max-sm:px-8">
      <BackButton />
      <div className="bg-zinc-800 rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center">Speech To Text</h1>
        <p className="text-center">Let the system writes for you</p>
        <div className="flex items-center justify-end gap-2 mt-8">
          <label htmlFor="lang">
            <HiLanguage style={{ fontSize: "2rem" }} />
          </label>
          <select className="text-zinc-900 p-1">
            <option>Indonesia</option>
            <option>English</option>
          </select>
        </div>
        <div className="mt-4 w-[50vw] flex flex-col items-center gap-4">
          <textarea
            rows="13"
            placeholder="your texts will apear here..."
            className="text-zinc-800 w-full p-2 resize-none rounded-lg"
          ></textarea>
          <div className="flex items-center gap-8">
            <button className="p-2 text-yellow-500 border-2 border-yellow-500 rounded-xl">Reset</button>
            <button className="p-4 text-2xl rounded-full border-2 border-cyan-500">
              <BsMicFill />
              {/* <BsMicMuteFill /> */}
            </button>
            <button className="p-2 text-green-500 border-2 border-green-500 rounded-xl">Copy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeechToText;
