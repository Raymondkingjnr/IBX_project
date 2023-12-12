"use client";
import { get_books } from "@/app/GlobalRedux/features/booksSlice";
import Image from "next/image";
import React, { useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdDateRange } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaMasksTheater } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Button } from ".";
import { getRandomData } from "@/utils";

IoIosArrowBack;

const TopBooks = () => {
  const dispatch = useDispatch();
  const { isLoading, books } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(get_books());
  }, []);

  const random_books = getRandomData(books, 12);

  if (isLoading) {
    return (
      <div className="grid place-content-center place-items-center my-20">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  return (
    <div className=" align-element my-16">
      <main className="flex flex-col md:flex-row gap-y-6 place-items-center place-content-center justify-between">
        <div className="flex items-center gap-2 ">
          <div className=" h-1 w-1 rounded-full bg-[#9747FF]" />
          <h1 className="font-bold text-lg text-black text-left uppercase">
            Top Books
          </h1>
        </div>
        <div className="flex gap-6">
          <button className="btn bg-[#F5F5F5] text-3xl font-extrabold text-gray-800 capitalize">
            <IoIosArrowBack />
          </button>
          <button className="btn bg-[#F5F5F5] text-3xl font-extrabold text-gray-800 capitalize">
            <IoIosArrowForward />
          </button>
        </div>
      </main>

      <div className="gap-8 carousel flex items-center place-items-center rounded-box carousel-center mt-10">
        {random_books?.map((book, index) => (
          <div
            className=" card grid rounded-xl bg-gray-50 carousel-item border w-[270px]"
            key={index}
          >
            <Image
              src={"/book4.jpg"}
              alt="book-img"
              width={400}
              height={400}
              className=" object-contain rounded-4xl p-2"
            />

            <div className=" px-2 py-3">
              <p className=" font-bold text-sm tracking-tight text-black ">
                {book?.title}
              </p>
              <main className="flex justify-between place-items-center py-5">
                <div className="flex gap-2 place-items-center">
                  <p className=" font-extrabold text-xl text-gray-400">
                    <IoPersonCircleOutline />
                  </p>
                  <h3 className=" font-medium text-sm text-gray-400">
                    {book?.author}
                  </h3>
                </div>
                <div className="flex gap-2 place-items-center">
                  <p className=" font-extrabold text-xl text-gray-400">
                    <MdDateRange />
                  </p>
                  <h4 className=" font-medium text-sm text-gray-400">
                    {book?.publication_year}
                  </h4>
                </div>
              </main>

              <div className="flex gap-2 place-items-center pb-6">
                <p className=" font-extrabold text-xl text-gray-400">
                  <FaMasksTheater />
                </p>
                <div className=" flex gap-2">
                  {book?.genre.map((item, index) => (
                    <div key={index}>
                      <h1 className=" font-medium text-sm text-gray-400">
                        {item}
                      </h1>
                    </div>
                  ))}
                </div>
              </div>

              <Button text="Read Now" icon={<IoIosArrowForward />} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBooks;
