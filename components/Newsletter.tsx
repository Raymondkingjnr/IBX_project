import React from "react";

const Newsletter = () => {
  return (
    <section className="authors ">
      <div className="py-20 align-element flex flex-wrap align-middle place-content-center place-items-center justify-between gap-10">
        <main>
          <h1 className="text-2xl font-bold tracking-tight text-center md:w-[400px] md:text-left">
            Find out about the latest courses with the{" "}
            <span className=" text-blue-600">academy</span> newsletter
          </h1>
        </main>
        <main className="relative">
          <input
            type="email"
            placeholder="Email adress"
            className="input input-bordered input-lg w-[300px] md:w-[500px] max-w-lg"
          />
          <div className=" absolute btn top-2 right-2 bg-black text-white font-bold rounded-lg text-sm w-32 grid place-content-center p-2">
            <p className=" capitalize">submit</p>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Newsletter;
