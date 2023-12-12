"use client";

import React, { useState, useMemo } from "react";
import { Button, Search } from ".";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import { setQuery } from "@/app/GlobalRedux/features/booksSlice";
import { useDispatch, useSelector } from "react-redux";

const SearchContainer = () => {
  const { query } = useSelector((state) => state.books);
  const [localSearch, setLocalSearch] = useState(query);

  const dispatch = useDispatch();

  const debounce = () => {
    let timeOutId;
    return (e) => {
      setLocalSearch(e.target.value);
      clearTimeout(timeOutId);
      timeOutId = setTimeout(() => {
        dispatch(setQuery(e.target.value));
      }, 2000);
    };
  };

  const optimizedDebounce = useMemo(() => debounce(), []);

  return (
    <div className=" align-element grid place-content-center place-items-center w-auto">
      <h3 className="text-center font-extrabold text-lg md:text-2xl tracking-tight leading-10 pb-9">
        Search among <span className="linear-text">58340</span> Books and <br />{" "}
        find your favorite Book
      </h3>
      {/*  */}
      <main className="flex flex-wrap gap-5 place-content-center place-items-center">
        <Button text="categories" />

        {/*  */}

        <Search
          type="text"
          icon={<CiSearch />}
          value={localSearch}
          handleChange={optimizedDebounce}
        />

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
