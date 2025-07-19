import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center lg:text-left">
        <div className="relative w-[100px] h-[100px] translate-x-50">
          <Image
            src="/projects/photo.jpg"
            alt="Prashant Kumar"
            fill
            className="object-cover rounded-full border-4 border-blue-500"
          />
        </div>

        <h1 className="text-[24px] sm:text-[30px] lg:text-[36px] lg:transform lg:translate-x-20">
          {"Hi, I'm "}

          <span className="text-blue-700 font-bold">Prashant Kumar</span>
        </h1>
        <h2 className="text-[14px] sm:text-[16px] lg:text-[18px] w-full mt-2 mb-5 px-2 sm:px-0">
          <span className="block sm:inline">
            Full Stack Developer | Competitive Programmer
          </span>
          <span className="block sm:inline sm:before:content-['_|_'] lg:before:content-['_|_']">
            Tech Enthusiast
          </span>
        </h2>
        <div className="flex gap-5 justify-center lg:justify-start lg:transform lg:translate-x-48 mb-5">
          <Link href="https://github.com/Prashant20245?tab=repositories">
            <Image
              src="/projects/github.png"
              alt="GitHub logo"
              width={30}
              height={30}
              className="h-[30px] w-[30px]"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/prashant-kumar-2395aa175?original_referer=">
            <Image
              src="/projects/linkedin.svg"
              alt="LinkedIn icon"
              width={30}
              height={30}
            />
          </Link>
          <Link href="">
            <Image
              src="/projects/twitter.svg"
              alt="Twitter icon"
              width={30}
              height={30}
            />
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center lg:justify-start lg:transform lg:translate-x-35">
          <Link href="/about">
            <Button className="bg-blue-700 text-white font-bold hover:scale-120 hover:text-blue-700 w-full sm:w-auto">
              View Profile
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="bg-gray-700 text-white font-bold hover:scale-120 hover:text-blue-700 w-full sm:w-auto">
              Contact Me
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
