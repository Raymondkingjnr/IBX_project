import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <section className=" align-element">
      <main className="flex flex-col md:flex-row  place-items-center gap-20">
        <p className=" bg-[#F5F2FA] p-6 rounded-2xl leading-7 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
          rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
          euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
          Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien
          faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper
          velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius
          duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam
          maecenas sed enim. Velit ut tortor pretium
        </p>
        <div className="grid place-items-center">
          <Image
            src={"/logo.svg"}
            alt="footer-logo"
            width={100}
            height={100}
            className=" object-contain"
          />
          <h1 className="font-extrabold text-3xl tracking-tight text-black mt-4">
            ACADEMY
          </h1>
        </div>
      </main>
      <main>
        <h1 className="text-center font-bold">Hello</h1>
      </main>
      <main>
        <h1 className="text-center font-bold">Hello</h1>
      </main>
    </section>
  );
};

export default Footer;
