"use client";
import { get_books } from "@/app/GlobalRedux/features/booksSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from ".";
import { getRandomData } from "@/utils";

const BooksContainer = () => {
  const dispatch = useDispatch();
  const { books, isLoading } = useSelector((store) => store.books);

  useEffect(() => {
    dispatch(get_books());
  }, []);

  let data = getRandomData(books, 8);
  // console.log(data);

  if (isLoading) {
    return (
      <div className="grid place-content-center place-items-center">
        <span className="loading loading-ring loading-lg"></span>;
      </div>
    );
  }

  return (
    <section className=" align-element my-10">
      <main className="flex flex-col md:flex-row gap-y-6 place-items-center place-content-center justify-between">
        <div className="flex items-center gap-2 ">
          <div className=" h-1 w-1 rounded-full bg-[#9747FF]" />
          <h1 className="font-bold text-lg text-black text-left uppercase">
            New Books
          </h1>
        </div>
        <main className="flex gap-10">
          <button className="btn bg-gray-100 w-[150px] text-black">
            Fiction
          </button>
          <button className="btn bg-gray-100 w-[150px] text-black">
            Non-Fiction
          </button>
        </main>
      </main>
      <main className="grid md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-14 place-content-center items-center place-items-center pt-6">
        {data.map((book, index) => (
          <Card book={book} key={index} />
        ))}
      </main>
    </section>
  );
};

export default BooksContainer;
