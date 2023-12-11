import React from "react";
import { BookProps } from "@/types";
import Image from "next/image";
import { Button } from ".";
import { IoIosArrowForward } from "react-icons/io";
import { MdDateRange } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaMasksTheater } from "react-icons/fa6";

interface bookCarProps {
  book: BookProps;
}

const Card = ({ book }: bookCarProps) => {
  const {
    id,
    title,
    author,
    publication_year,
    genre,
    description,
    cover_image,
  } = book;

  return (
    <div className=" bg-[#E6E6E6] rounded-lg">
      <main className=" w-[]">
        <Image
          src={"/book.jpg"}
          alt="img"
          width={500}
          height={500}
          className=" object-contain rounded-lg mb-2"
        />
      </main>
      <div className=" px-4 py-3">
        <p className=" font-bold text-sm tracking-tight text-black ">{title}</p>
        <main className="flex justify-between place-items-center py-5">
          <div className="flex gap-2 place-items-center">
            <p className=" font-extrabold text-xl text-gray-400">
              <IoPersonCircleOutline />
            </p>
            <h3 className=" font-medium text-sm text-gray-400">{author}</h3>
          </div>
          <div className="flex gap-2 place-items-center">
            <p className=" font-extrabold text-xl text-gray-400">
              <MdDateRange />
            </p>
            <h4 className=" font-medium text-sm text-gray-400">
              {publication_year}
            </h4>
          </div>
        </main>

        <Button text="Read Now" icon={<IoIosArrowForward />} />
      </div>
    </div>
  );
};

export default Card;
