import React from "react";

const Button = ({ route, name }) => {
  return (
    <a className="inline-block px-8 py-3 rounded-lg bg-blue-600 text-lg" href={route}>
      {name}
    </a>
  );
};

export default Button;
