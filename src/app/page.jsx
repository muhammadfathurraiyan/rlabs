import React from "react";
import Button from "./commponents/Button";

const page = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="">Raiyan Laboratoiums.</h1>
      <p>
        Welcome to Raiyan Laboratory aka Rlab. Rlab is a collection of my work{" "}
        {"(my portfolio)"}. I will upload my project here. Stay tuned for the
        next update. Thanks for visiting.
      </p>
      <Button route="/dashboard" name="Get Started!" />
    </div>
  );
};

export default page;
