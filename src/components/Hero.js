import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import Image from "next/image";

export default function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      {/* Text container */}
      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={colors[0]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Full Stack Developer
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>
        <p className="text-xl text-gray-700 dark:text-gray-300 mt-4">
          "Hello! I'm Joel, and thank you for visiting my personal website, where I showcase some of my projects. 
          Whether I'm working on personal or professional projects, I always prioritize security, performance, simplicity, modern design, and scalability."
        </p>
        <div className="mt-8">
          <a
            href="/contact"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
      {/* Image container */}
      <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20">
        <div className="w-3/4">
          <div className="w-full h-auto overflow-hidden rounded-md shadow-xl">
            <div className="relative w-full h-86">
              {/* <div className="absolute inset-0 bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-xl text-gray-700 dark:text-gray-300"> */}
              <div className="image-container">
              <img 
                src="images/headshot.png" 
                alt="Professional headshot" 
                layout="fill"
                objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}