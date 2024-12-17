"use client";
import { navlinks } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { TbAirBalloon } from "react-icons/tb";

type props = {
  openNav: () => void;
};

const Nav = ({ openNav }: props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  });

  return (
    <div
      className={`${navBg ? "bg-blue-950 shadow-md" : "fixed"} fixed z-[1100] h-[12vh] w-full transition-all duration-200`}
    >
      <div className="mx-auto flex h-full w-[90%] items-center justify-between xl:w-[80%]">
        {/* logo  */}
        <div className="flex items-center space-x-2">
          <div className="flex h-10 w-10 flex-col items-center justify-center rounded-full bg-rose-500">
            <TbAirBalloon className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-xl font-bold uppercase text-white md:text-2xl">
            Tripi
          </h1>
        </div>
        {/* navlinks */}
        <div className="hidden items-center space-x-10 lg:flex">
          {navlinks.map((link) => {
            return (
              <Link href={link.url} key={link.id}>
                <p className='relative block w-fit text-base font-medium text-white duration-300 after:block after:h-[3px] after:w-full after:origin-right after:scale-x-0 after:bg-yellow-300 after:transition after:content-[""] after:hover:scale-x-100'>
                  {link.label}
                </p>
              </Link>
            );
          })}
        </div>

        {/* buttons */}
        <div className="flex items-center space-x-4">
          <button className="rounded-lg bg-white px-8 py-2 text-base text-black transition-all duration-200 hover:bg-gray-200 md:px-12 md:py-2.5">
            Book now
          </button>
          <HiBars3BottomRight
            onClick={openNav}
            className="h-8 w-8 cursor-pointer text-white lg:hidden"
          ></HiBars3BottomRight>
        </div>
      </div>
    </div>
  );
};

export default Nav;
