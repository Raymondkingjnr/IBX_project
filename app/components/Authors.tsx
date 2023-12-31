import React from "react";
import autho1 from "../../public/author1.png";
import autho2 from "../../public/author2.png";
import autho3 from "../../public/author3.png";
import autho4 from "../../public/author4.png";
import autho5 from "../../public/author5.png";
import autho6 from "../../public/author6.png";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { Button } from ".";

const authors = [
  {
    image: autho1,
    name: "Frank George",
  },
  {
    image: autho2,
    name: "Frank George",
  },
  {
    image: autho3,
    name: "Frank George",
  },
  {
    image: autho4,
    name: "Frank George",
  },
  {
    image: autho5,
    name: "Frank George",
  },
  {
    image: autho6,
    name: "Frank George",
  },
];

const Authors = () => {
  return (
    <section className="align-element">
      <div className=" grid items-center lg:grid-cols-2 my-20">
        <main className=" grid  place-items-center  lg:w-[420px] md:place-items-start pb-8">
          <h2 className=" font-extrabold text-2xl mb-8 text-gray-600">
            {" "}
            <span className="linear-text">Best</span> Authors
          </h2>
          <p className=" text-base font-medium text-gray-400">
            At the Academy, we strive to bring together the best books from
            amazing authors world wide
          </p>
          <div className=" mt-10">
            <Button text="All Author" icon={<IoIosArrowForward />} />
          </div>
        </main>

        {/* AUTHORS CONTAINER */}

        <main className="grid md:grid-cols-3 place-content-center items-center place-items-center gap-y-4 gap-x-[1rem] lg:gap-x-10 ">
          {authors.map((item) => (
            <div className=" w-[180px] lg:pl-6  relative z-40">
              <Image
                src={item.image}
                alt="image"
                width={180}
                height={180}
                className=" object-contain rounded-lg "
              />
              <div className="flex mt-2 justify-between">
                <p className=" font-bold text-xs text-gray-300">{item.name}</p>
                <p className=" font-bold text-xs text-gray-400">Author</p>
              </div>
            </div>
          ))}
          <div className=" hidden lg:flex absolute">
            <Image
              src={"/bg2.png"}
              alt="bg"
              width={2000}
              height={600}
              className=" object-contain right-0"
            />
          </div>
        </main>
      </div>
    </section>
  );
};

export default Authors;
