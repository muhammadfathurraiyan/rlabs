"use client";
import ParticlesBackground from "../components/home/ParticlesBackground";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <ParticlesBackground />
      <div className="w-full h-screen flex items-center px-32 max-sm:px-8">
        <div className="relative z-10 w-1/2 max-sm:w-full">
          <h1 className="text-4xl font-bold">Raiyan Labs.</h1>
          <p className="mb-4">
            Welcome to Raiyan Labs aka Rlabs. Rlabs is a collection of my works.
            I will upload my project here. Stay tuned for the next update.
            Thanks for visiting.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 8 }}
          >
            <Link
              className="inline-block px-5 py-3 rounded-xl duration-500 bg-gradient-to-r from-cyan-800 to-cyan-500"
              href="/labs"
            >
              Get started 🚀
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}
