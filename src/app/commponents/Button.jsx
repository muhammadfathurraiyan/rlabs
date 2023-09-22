import React from "react";

const Button = ({ route, name }) => {
  return (
    <a className="inline-block px-5 py-2 rounded-xl bg-orange-500 hover:bg-orange-700 duration-300" href={route}>
      {name}
    </a>
  );
};

export default Button;
