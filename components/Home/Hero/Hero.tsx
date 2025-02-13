import { BaseInfo } from "@/Data/data";
import React from "react";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] relative">
      <div className="flex justify-center mx-auto flex-col w-4/5 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            {/* text content */}
            <div>
                {/* sub heading */}
                <h1 className="text-2xl md:text-2xl mb-3 lg:text-4xl text-gray-300 font-semibold">I am {BaseInfo.name}</h1>
                {/* title heading */}
                <h1 className="text-2xl text-bg sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold md:leading-[3ream] lg:leading-[3.5ream] xl:leading-[4ream] text-white">{BaseInfo.position}</h1>
                {/* description */}
                <p className="text-white text-sm mt-5 md:text-base text-opacity-60">{BaseInfo.description}</p>
                {/* Button */}
                <button className="md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8 bg-blu hover:bg-blue-900 flex items-center space-x-2">
                    <span>Download</span>
                    <FaDownload></FaDownload>
                </button>
            </div>
            {/* image content */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
