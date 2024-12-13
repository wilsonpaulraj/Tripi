import SearchBox from "@/components/Helper/SearchBox";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="relative h-[120vh] w-full sm:h-[100vh]">
      {/* overlay */}
      <div className="absolute left-0 top-0 h-full w-full bg-gray-800 opacity-70"></div>
      <video
        src="/Images/hero1.mp4"
        autoPlay
        muted
        loop
        preload="metadata"
        className="h-full w-full object-cover"
      ></video>
      {/* */}
      <div className="absolute left-[50%] top-[50%] z-[100] h-full w-full translate-x-[-50%] translate-y-[-50%]">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <div>
            <h1 className="lg:text[45px] mb-4 text-center text-[25px] font-bold uppercase tracking-[0.7rem] text-white md:mb-0 md:text-[35px]">
              Lets Enjoy the Nature!
            </h1>
            <p className="[word-spacing-5px] text-center text-lg font-normal text-white md:text-base">
              Get the best prices on 2,000,000+ properties, worldwide{" "}
            </p>
          </div>

          {/* search box */}
          <SearchBox />
          <Link
            className="group relative -mt-4 overflow-hidden rounded-none bg-rose-600 px-14 py-2.5 text-white transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 hover:ring-2 hover:ring-red-400 hover:ring-offset-2 md:px-28"
            href="#"
          >
            <span className="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-700 group-hover:-translate-x-96"></span>
            <span className="relate font-bold">Search</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
