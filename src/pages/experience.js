import React from "react";
import ContainerBlock from "../components/ContainerBlock";

export default function Experience() {
  return (
    <ContainerBlock
      title="Experience - Joel Hernandez"
      description="Learn about my professional experience and career journey"
    >
      <section className="bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
          <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
            Experience
          </h1>
        </div>
        <div className="bg-[#F1F1F1] dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="col-span-1 md:col-span-4">
                <div className="sticky top-20">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Career Path
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    My professional journey through tech and development.
                  </p>
                </div>
              </div>
              <div className="col-span-1 md:col-span-8">
                <div className="relative border-l-2 border-gray-300 dark:border-gray-700 ml-3">
                  {/* Experience Item 1 */}
                  <div className="mb-10 ml-8">
                    <div className="absolute w-6 h-6 bg-blue-600 rounded-full -left-3 mt-2 border-4 border-white dark:border-gray-900"></div>
                    <div className="flex flex-row">
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                          Senior Software Developer
                        </h3>
                        <p className="text-sm text-blue-600 dark:text-blue-500">
                          ThoughtWorks | 2019 - 2024
                        </p>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                          Developed and optimized microservices with Java, Spring Boot, and Kubernetes. Enhanced system performance through
                          Kafka integration and endpoint optimization. Delivered scalable solutions with a focus on high-performance RESTful
                          APIs, risk management, and continuous improvement.
                        </p>
                        <div className="mt-2">
                          <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
                            Java
                          </span>
                          <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
                            Spring Boot
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Experience Item 2 */}
                  <div className="mb-10 ml-8">
                    <div className="absolute w-6 h-6 bg-green-600 rounded-full -left-3 mt-2 border-4 border-white dark:border-gray-900"></div>
                    <div className="flex flex-row">
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                          Senior Software Developer
                        </h3>
                        <p className="text-sm text-green-600 dark:text-green-500">
                          ThoughtWorks | 2019 - 2024
                        </p>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                          I led backend development tasks for major enterprise clients, improving system throughput by 25% through microservice optimization and Kafka integration. I managed
                          complex application features and implemented efficient data management practices, all while working in containerized environments with Kubernetes. 
                        </p>
                        <div className="mt-2">
                          <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
                            Java
                          </span>
                          <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
                            Spring Boot
                          </span>
                          <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
                            PostgreSQL
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Education Section */}
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-16 mb-8">
                  Education
                </h2>
                <div className="relative border-l-2 border-gray-300 dark:border-gray-700 ml-3">
                  {/* Education Item 1 */}
                  <div className="mb-10 ml-8">
                    <div className="absolute w-6 h-6 bg-yellow-600 rounded-full -left-3 mt-2 border-4 border-white dark:border-gray-900"></div>
                    <div className="flex flex-row">
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                          BS in Industrial Technology, Minor in Business
                        </h3>
                        <p className="text-sm text-yellow-600 dark:text-yellow-500">
                          San Jose State University
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ContainerBlock>
  );
}