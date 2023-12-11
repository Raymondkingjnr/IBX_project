import Image from "next/image";
import React from "react";
import { Button } from ".";
import { IoIosArrowForward } from "react-icons/io";

const Hero = () => {
  return (
    <section className=" align-element my-6 flex flex-col md:flex-row justify-between place-content-center items-center">
      <div className="w-full md:w-[500px] grid place-items-start  gap-y-7">
        <h2 className=" text-lg lg:text-3xl text-center md:text-left font-extrabold pb-7 leading-10 tracking-tight">
          🙌 Hello friends <br /> I am Sofia and we{" "}
          <span className="linear-text">want to start</span> a book club
          together. Do you like it too 😍 ? click the button below to find a
          book and join
        </h2>
        <div className="flex align-middle gap-3 vibrate-1">
          <Button text="Start Reading" icon={<IoIosArrowForward />} />
          <Image src={"/img.png"} alt="img" width={120} height={20} />
        </div>
      </div>
      <div className=" hidden md:flex pt-7 ">
        <Image
          src={"/hero.png"}
          alt="hero"
          width={700}
          height={200}
          className=" object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
