import Link from "next/link";
import React from "react";

const links = [
  {
    text: "Books",
    url: "/",
  },
  {
    text: "About Us",
    url: "/",
  },
  {
    text: "Contact Us",
    url: "/",
  },
];

const Navlinks = () => {
  return (
    <div className="lg:flex">
      {links.map((link, index) => (
        <li key={index}>
          <Link href={link.url} className=" capitalize text-sm font-bold">
            {link.text}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default Navlinks;
