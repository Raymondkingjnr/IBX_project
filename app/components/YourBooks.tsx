"use client";
import { get_books } from "@/app/GlobalRedux/features/booksSlice";
import Image from "next/image";
import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { MdDateRange } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaMasksTheater } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Button } from ".";

const YourBooks = () => {
  const dispatch = useDispatch();
  const { isLoading, books } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(get_books());
  }, []);

  if (isLoading) {
    return (
      <div className="grid place-content-center place-items-center my-20">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  return (
    <section className=" align-element my-16">
      <main className="flex justify-between place-content-center place-items-center">
        <div className="flex items-center gap-2 ">
          <div className=" h-1 w-1 rounded-full bg-[#9747FF]" />
          <h1 className="font-bold text-lg text-gray-600 text-left uppercase">
            Your Books
          </h1>
        </div>
        <div>
          <button className="btn bg-[#F5F5F5] text-gray-500 capitalize">
            see all
          </button>
        </div>
      </main>

      {/* DISPLAY YOUR BOOKS */}

      <main className="grid lg:grid-cols-2 place-content-center place-items-center gap-y-12 gap-x-8 mt-10">
        {books?.slice(3, 7)?.map((book, index) => (
          <div
            key={index}
            className="card flex flex-col md:flex-row w-[300px] md:w-auto bg-gray-100 rounded-lg"
          >
            <Image
              src={"/book2.jpg"}
              alt="book-img"
              width={300}
              height={300}
              className=" object-contain rounded-2xl"
            />
            <main className="px-5 py-4">
              <p className=" font-bold text-sm tracking-tight text-black ">
                {book?.title}
              </p>
              <main className="flex justify-between gap-16 place-items-center py-5">
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
              <div className="flex gap-2 place-items-center">
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
              <p className="pt-5 font-medium text-sm text-gray-500 w-[200px]">
                {book?.description}
              </p>
              <div className="grid float-right items-end mt-[3rem]">
                <Button text="Let's Go" icon={<IoIosArrowForward />} />
              </div>
            </main>
          </div>
        ))}
      </main>
    </section>
  );
};

export default YourBooks;
