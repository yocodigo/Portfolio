import React from "react";
import ContainerBlock from "../components/ContainerBlock";

export default function Projects() {
  return (
    <ContainerBlock
      title="Projects - Joel Hernandez"
      description="Browse through my showcased projects and work"
    >
      <section className="bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
          <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
            Projects
          </h1>
        </div>
        
        {/* Grid starts here */}
        <div className="bg-[#F1F1F1] dark:bg-gray-900">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
            {/* Project Card 1 */}
            <a href="#" className="w-full block shadow-2xl">
              <div className="relative overflow-hidden rounded-lg">
                <div className="h-72 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                  <p className="text-gray-600 dark:text-gray-400 text-xl">Project Image 1</p>
                </div>
                <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                  Project One
                </h1>
                <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                  01
                </h1>
              </div>
            </a>
            
            {/* Project Card 2 */}
            <a href="#" className="w-full block shadow-2xl">
              <div className="relative overflow-hidden rounded-lg">
                <div className="h-72 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                  <p className="text-gray-600 dark:text-gray-400 text-xl">Project Image 2</p>
                </div>
                <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-blue-500 rounded-md px-2">
                  Project Two
                </h1>
                <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                  02
                </h1>
              </div>
            </a>
            
            {/* Project Card 3 */}
            <a href="#" className="w-full block shadow-2xl">
              <div className="relative overflow-hidden rounded-lg">
                <div className="h-72 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                  <p className="text-gray-600 dark:text-gray-400 text-xl">Project Image 3</p>
                </div>
                <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-green-500 rounded-md px-2">
                  Project Three
                </h1>
                <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                  03
                </h1>
              </div>
            </a>
            
            {/* Project Card 4 */}
            <a href="#" className="w-full block shadow-2xl">
              <div className="relative overflow-hidden rounded-lg">
                <div className="h-72 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                  <p className="text-gray-600 dark:text-gray-400 text-xl">Project Image 4</p>
                </div>
                <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-yellow-500 rounded-md px-2">
                  Project Four
                </h1>
                <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                  04
                </h1>
              </div>
            </a>
          </div>
        </div>
      </section>
    </ContainerBlock>
  );
}