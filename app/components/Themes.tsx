import React from "react";
import { genres } from "@/constant";

const Themes = () => {
  return (
    <div className="text-flow">
      <div className="flex gap-3 flex-row w-auto ">
        {genres.map((item) => (
          <button className="btn bg-gray-100 text-black font-bold text-sm">
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Themes;
