import React from "react";
import { Button, Search } from ".";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";

const SearchContainer = () => {
  return (
    <div className=" align-element grid place-content-center place-items-center w-auto">
      <h3 className="text-center font-extrabold text-lg md:text-2xl tracking-tight leading-10 pb-9">
        Search among <span className="linear-text">58340</span> Books and <br />{" "}
        find your favorite Book
      </h3>
      <main className="flex flex-wrap gap-5 place-content-center place-items-center">
        <Button text="categories" />
        <Search type="text" icon={<CiSearch />} />
        <p className=" font-medium text-sm text-gray-400">
          or view the following categories
        </p>
        <Image
          src={"/arrows.png"}
          alt="arrow"
          width={100}
          height={100}
          className=" object-contain"
        />
      </main>
    </div>
  );
};

export default SearchContainer;
