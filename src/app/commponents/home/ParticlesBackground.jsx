"use client";
import Particles from "react-tsparticles";
import particleConfig from "./particle-config";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const load = async (engine) => {
    await loadFull(engine);
  };
  return <Particles id="tsparticles" init={load} options={particleConfig}></Particles>;
};

export default ParticlesBackground;
