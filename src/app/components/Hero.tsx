import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh] px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="text-center max-w-4xl mx-auto">
        <div className="relative w-[100px] h-[100px] mx-auto mb-6 lg:mb-4">
          <Image
            src="/projects/photo.jpg"
            alt="Prashant Kumar"
            fill
            className="object-cover rounded-full border-4 border-blue-500"
          />
        </div>

        <h1 className="text-[24px] sm:text-[30px] lg:text-[36px] xl:text-[40px] font-medium leading-tight mb-3">
          {"Hi, I'm "}
          <span className="text-blue-700 font-bold">Prashant Kumar</span>
        </h1>

        <h2 className="text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px] text-gray-600 mb-6 px-2 sm:px-0 leading-relaxed">
          <span className="block sm:inline">
            Full Stack Developer | Competitive Programmer
          </span>
          <span className="block sm:inline sm:before:content-['_|_'] lg:before:content-['_|_']">
            Tech Enthusiast
          </span>
        </h2>

        <div className="flex gap-4 sm:gap-5 justify-center mb-6 sm:mb-8">
          <Link
            href="https://github.com/Prashant20245?tab=repositories"
            className="transition-transform hover:scale-110 duration-200"
          >
            <Image
              src="/projects/github.png"
              alt="GitHub logo"
              width={30}
              height={30}
              className="h-[30px] w-[30px] sm:h-[35px] sm:w-[35px]"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/prashant-kumar-2395aa175?original_referer="
            className="transition-transform hover:scale-110 duration-200"
          >
            <Image
              src="/projects/linkedin.svg"
              alt="LinkedIn icon"
              width={30}
              height={30}
              className="h-[30px] w-[30px] sm:h-[35px] sm:w-[35px]"
            />
          </Link>
          <Link
            href=""
            className="transition-transform hover:scale-110 duration-200"
          >
            <Image
              src="/projects/twitter.svg"
              alt="Twitter icon"
              width={30}
              height={30}
              className="h-[30px] w-[30px] sm:h-[35px] sm:w-[35px]"
            />
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-5 justify-center">
          <Link href="/about">
            <Button className="bg-blue-700 text-white font-bold hover:bg-blue-800 hover:scale-105 transition-all duration-200 w-full sm:w-auto px-6 py-2 sm:px-8 sm:py-3">
              View Profile
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="bg-gray-700 text-white font-bold hover:bg-gray-800 hover:scale-105 transition-all duration-200 w-full sm:w-auto px-6 py-2 sm:px-8 sm:py-3">
              Contact Me
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
