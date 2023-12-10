import React from "react";
import { SearchProps } from "@/types";

const Search = ({ type, icon }: SearchProps) => {
  return (
    <div className=" relative w-auto">
      <input
        type={type}
        placeholder="search anything"
        className={`input w-[500px] max-w-xs`}
      />
      <p className=" absolute top-4 right-4 text-gray-400 font-semibold text-lg">
        {icon}
      </p>
    </div>
  );
};

export default Search;
