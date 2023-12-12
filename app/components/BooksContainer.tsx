"use client";
import { get_books } from "@/app/GlobalRedux/features/booksSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, SearchContainer } from ".";

const BooksContainer = () => {
  const dispatch = useDispatch();
  const { books, isLoading, query } = useSelector((store) => store.books);

  const bookNumber = books?.slice(0, 8);

  useEffect(() => {
    dispatch(get_books());
  }, [query]);

  if (isLoading) {
    return (
      <div className="grid place-content-center place-items-center my-20">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  return (
    <section className=" align-element my-5">
      <SearchContainer />

      <main className="flex flex-col md:flex-row gap-y-6 place-items-center place-content-center justify-between pt-10">
        <div className="flex items-center gap-2 ">
          <div className=" h-1 w-1 rounded-full bg-[#9747FF]" />
          <h1 className="font-bold text-lg text-gray-700 text-left uppercase">
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
        {bookNumber?.map((book, index) => (
          <Card book={book} key={index} />
        ))}
      </main>
    </section>
  );
};

export default BooksContainer;
