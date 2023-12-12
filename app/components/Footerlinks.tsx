import { footer_links, comments } from "@/constant";
import Image from "next/image";
import { it } from "node:test";
import React from "react";

const Footerlinks = () => {
  return (
    <section className=" grid gap-10 lg:grid-cols-3 py-20">
      <main className="mt-12">
        <div className="flex place-items-center gap-2 mb-3">
          <div className=" h-1 w-1 rounded-full bg-[#9747FF]" />
          <h1 className="font-bold text-lg text-black uppercase ">
            Membership Certificate
          </h1>
        </div>
        <Image
          src={"/certificate.png"}
          alt="image"
          width={400}
          height={400}
          className=" object-contain"
        />
      </main>
      <main className=" grid p-2 md:grid-cols-2 gap-y-6 gap-x-[3rem]">
        {footer_links.map((item) => (
          <div className="grid">
            <div className="flex items-center gap-2 mb-3">
              <div className=" h-1 w-1 rounded-full bg-[#9747FF]" />
              <h1 className="font-bold text-lg text-black text-left uppercase">
                {item.title}
              </h1>
            </div>
            <div className="grid gap-y-1 pl-4">
              {item.items.map((item) => (
                <li className=" list-none hover:text-gray-300 transition duration-300 cursor-pointer font-medium text-gray-500 text-xs">
                  {item}
                </li>
              ))}
            </div>
          </div>
        ))}
      </main>
      <main className="grid">
        <div className="flex items-center mt-12 gap-2 ">
          <div className=" h-1 w-1 rounded-full bg-[#9747FF]" />
          <h1 className="font-bold text-lg text-black text-left uppercase">
            New Comments
          </h1>
        </div>
        <div className="grid gap-3 pt-8">
          {comments.map((item) => (
            <div className=" w-fit p-2 rounded-xl bg-slate-100">
              <h2 className=" font-medium text-base text-black">{item.name}</h2>
              <p className=" text-xs font-bold pt-3 text-gray-500">
                {item.comment}
              </p>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Footerlinks;
