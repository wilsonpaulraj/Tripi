import { navlinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNavbar = ({ showNav, closeNav }: props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      <div
        className={`fixed ${navOpen} inset-0 z-[1002] h-screen w-full transform bg-black opacity-70 transition-all duration-500`}
      ></div>
      <div
        className={`text-white ${navOpen} sm:w[60%] fixed z-[1050] flex h-full w-[80%] transform flex-col justify-center space-y-6 bg-rose-900 transition-all delay-300 duration-500`}
      >
        {navlinks.map((link) => {
          return (
            <Link key={link.id} href={link.url}>
              <p className="ml-12 w-fit border-b-[1.5px] border-white pb-1 text-[20px] text-white sm:text-[50px]">
                {link.label}
              </p>
            </Link>
          );
        })}
        <CgClose
          onClick={closeNav}
          className="absolute right-[1.4rem] top-[0.7rem] h-6 w-6 sm:h-8 sm:w-8"
        />
      </div>
    </div>
  );
};

export default MobileNavbar;
