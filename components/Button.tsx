import React from "react";
import { ButtonProps } from "@/types";

const Button = ({ text, buttonStyles, icon }: ButtonProps) => {
  return (
    <button
      className={` flex gap-2 place-content-center btn bg-black text-white font-medium text-sm  ${buttonStyles}`}
    >
      <p className="font-bold">{text}</p>
      <p className="text-2xl font-bold">{icon}</p>
    </button>
  );
};

export default Button;
