"use client";
import Reveal from "@/components/global/Reveal";
import Card from "../../components/labs/Card";
import cardsData from "../../components/labs/cardsData.js";

const Labs = () => {
  return (
    <div className="w-full min-h-screen gap-8 flex flex-col items-center px-16 py-8 max-sm:px-8">
      <div className="flex flex-col items-center">
        <Reveal>
          <h1 className="font-bold text-5xl">Labs</h1>
        </Reveal>
        <Reveal>
          <p className="text-xl">My experiments.</p>
        </Reveal>
      </div>
      <div className="flex flex-wrap gap-6 justify-center items-start">
        {cardsData.map((card) => (
          <Card title={card.title} desc={card.desc} stacks={card.stacks} href={card.href} img={card.img} />
        ))}
      </div>
    </div>
  );
};

export default Labs;
