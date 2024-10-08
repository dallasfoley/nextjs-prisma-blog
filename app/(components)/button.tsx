"use client";

import { useState } from "react";

const Button = () => {
  const [updoots, setUpdoots] = useState(0);

  const handleClick = () => {
    setUpdoots(updoots + 1);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 h-12 w-32 font-bold rounded-xl p-2 m-4"
    >
      Updoot
    </button>
  );
};

export default Button;
