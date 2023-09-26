import Reveal from "@/components/global/Reveal";
import ParticlesBackground from "../components/home/ParticlesBackground";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center px-32 max-sm:px-8">
      <ParticlesBackground />
      <div className="relative z-10 w-1/2 max-sm:w-full">
        <Reveal>
          <h1 className="font-bold text-5xl">Raiyan Labs. 👨‍🚀</h1>
        </Reveal>
        <Reveal>
          <p className="mb-4 text-xl">
            Welcome to Raiyan Labs aka Rlabs. Rlabs is a collection of my works.
            I will upload my project here. Stay tuned for the next update.
            Thanks for visiting.
          </p>
        </Reveal>
        <Reveal>
          <Link
            className="inline-block px-5 py-3 rounded-xl text-xl duration-500 bg-gradient-to-r from-cyan-500 via-cyan-800 to-cyan-500 bg-size-200 hover:bg-pos-0 bg-pos-100"
            href="/labs"
          >
            Get started 🚀
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
