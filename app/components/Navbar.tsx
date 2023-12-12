"use client";
import Image from "next/image";
import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import Navlinks from "./Navlinks";
import { Search } from ".";

const Navbar = () => {
  return (
    <section className=" navbar">
      <div className=" navbar-start">
        <main className="hidden lg:flex place-content-center gap-2">
          <Image
            src={"/logo.svg"}
            alt="logo"
            width={30}
            height={18}
            className=" object-contain"
          />
          <h1 className="text-xl md:text-4xl font-extrabold text-black uppercase tracking-tighter">
            Academy
          </h1>
        </main>
        {/* DROPDOWN */}
        <aside className="dropdown">
          <label tabIndex={0} role="button" className="lg:hidden">
            <p>
              <FaBarsStaggered className="h-6 w-6" />
            </p>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-slate-500 text-white w-52  rounded-lg"
          >
            <Navlinks />
          </ul>
        </aside>
        <main className="hidden lg:flex">
          <ul className="menu menu-horizontal">
            <Navlinks />
          </ul>
        </main>
      </div>
      <div className=" hidden md:flex navbar-center">
        <Search type="text" icon={<CiSearch />} />
      </div>
      <div className=" navbar-end hidden md:flex p-3 w-[300px] gap-x-10">
        <main className="flex gap-2 place-content-center">
          <Image
            src={"/profile.png"}
            alt="profile"
            width={50}
            height={50}
            className=" object-contain"
          />
          <div>
            <h2 className=" text-xs font-semibold text-black">Raymond Nnaji</h2>
            <p className=" text-sm font-medium text-gray-400">Historian</p>
          </div>
        </main>
        <main className=" w-12 h-12 grid bg-gray-300 rounded-lg place-content-center items-center">
          <p className=" text-[#9E5CF2] font-bold text-xl">
            <FaBell />
          </p>
        </main>
      </div>
    </section>
  );
};

export default Navbar;
