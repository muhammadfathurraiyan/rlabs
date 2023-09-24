"use client";
import HomeBody from "../components/home/HomeBody";
import ParticlesBackground from "../components/home/ParticlesBackground";
import { motion, useIsPresent } from "framer-motion";

export default function Home() {
  const isPresent = useIsPresent()
  return (
    <>
      <ParticlesBackground />
      <HomeBody />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="fixed inset-y-0 inset-x-0 z-20 bg-cyan-500"
      />
    </>
  );
}
