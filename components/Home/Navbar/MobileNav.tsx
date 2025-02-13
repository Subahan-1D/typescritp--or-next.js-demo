import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";
// props define
type Props = {
  showNav: boolean;
  closeNav: () => void;
};
const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      {/* ovarlav */}
      <div
        className={`fixed ${navOpen} transform duration-500 transition-all insert-0 z-[1000] bg-black opacity-70 w-full h-screen`}
      ></div>
      {/* navlinks */}
      <div
        className={`fixed ${navOpen} transform duration-500 transition-all delay-300  text-white justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-[#0f0715] space-y-6 z-[10000]`}
      >
        {NavLinks.map((navlink) => {
          return (
            <Link href={navlink.url} key={navlink.id}>
              <p className="nav__link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px]">
                {navlink.label}
              </p>
            </Link>
          );
        })}
        {/* close button */}
        <CgClose
          onClick={() => {
            console.log("Menu Button Clicked!");
            closeNav();
          }}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-8 text-white"
        ></CgClose>
      </div>
    </div>
  );
};

export default MobileNav;
