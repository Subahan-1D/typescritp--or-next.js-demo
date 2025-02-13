import React from "react";
import Image from "next/image";
import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";

// define propstypes
type Props = {
  openNav: () => void;
};
const Nav = ({ openNav }: Props) => {
  return (
    <div className="fixed h-[12vh] z-[10] w-full bg-blue-950">
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] lg:w-[80%] mx-auto">
        {/* Logo */}
        <Image
          src="/images/subahan.jpeg"
          alt="LOGO"
          width={66}
          height={66}
          className="ml-[-1.5rem] sm:ml-0 rounded-md"
        />

        {/* Nav Links */}
        <div className="flex items-center space-x-10">
          <div className="hidden lg:flex item-center space-x-8">
            {NavLinks.map((navlink) => {
              return (
                <Link href={navlink.url} key={navlink.id}>
                  <p className="nav__link">{navlink.label}</p>
                </Link>
              );
            })}
          </div>
          {/* Button */}
          <div className="flex items-center space-x-4">
            <button className="md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-base bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg">
              Hire Me
            </button>
            {/* burger */}
            <HiBars3BottomRight
              onClick={() => {
                console.log("Menu Button Clicked!");
                openNav();
              }}
              className="w-8 h-8 cursor-pointer text-white lg:hidden"
            ></HiBars3BottomRight>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
