import React from "react";
import { BsEnvelopePaper } from "react-icons/bs";

const NewsLetterSection = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-black pb-16 pt-16">
      <BsEnvelopePaper className="mt-20 h-16 w-16 text-white" />
      <h1 className="mt-10 text-lg font-semibold tracking-widest text-white sm:text-xl md:text-2xl">
        Your Travel Journey Starts here!
      </h1>
      <p className="mt-3 text-xs text-white sm:text-sm">
        Sign up and We&apos;ll send the best deals to you
      </p>
      <div className="w-full">
        <input
          type="text"
          className="mx-auto mt-3 block w-[95%] rounded-lg bg-white px-6 py-3.5 outline-none md:w-[60%] lg:w-[40%]"
          placeholder="Email"
        />
        <button className="mx-auto mt-3 block w-[95%] rounded-lg bg-blue-900 px-6 py-3.5 text-white outline-none transition-all duration-200 hover:bg-blue-950 md:w-[60%] lg:w-[40%]">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetterSection;
