"use client";
import Card from "../../components/labs/Card";
import cardsData from "../../components/labs/cardsData.js"

const Labs = () => {
  return (
    <div className="w-full min-h-screen gap-8 flex flex-col items-center px-16 py-8 max-sm:px-8">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold">Labs</h1>
        <p>my experiments</p>
      </div>
      <div className="flex flex-wrap gap-6 justify-center items-center">
        {cardsData.map((card) => (
          <Card
            title={card.title}
            desc={card.desc}
            stacks={card.stacks}
          />
        ))}
      </div>
    </div>
  );
};

export default Labs;
