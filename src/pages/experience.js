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
                    <div className="absolute w-6 h-6 bg-green-600 rounded-full -left-3 mt-2 border-4 border-white dark:border-gray-900"></div>
                    <div className="flex flex-row">
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                          Freelance Developer
                        </h3>
                        <p className="text-sm text-green-600 dark:text-green-500">
                            Self | Hackathon collaboration | 2025 - Present
                        </p>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                          ● First to successfully meet challenge of creating a civic site scraper script to download agenda docs <br></br>
                          ● Crreated a specialized chat bot that provides responses on inquires specific to collection of agendas and proved as a useful tool for county advocates <br></br>
                          ● Created a food analyzer that will determine the nutrional value and whether its safe to consume <br></br>
                          ● Built portfolio site <br></br>
                          ● Built a financial dashboard to have all the information I need in one place to make informed decisions before making stock/option trades
                          ● Partnered to build a food ordering service site
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

                  {/* Experience Item 1 */}
                  <div className="mb-10 ml-8">
                    <div className="absolute w-6 h-6 bg-green-600 rounded-full -left-3 mt-2 border-4 border-white dark:border-gray-900"></div>
                    <div className="flex flex-row">
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                          Laid off | 2024
                        </h3>
                          <p className="text-sm text-green-600 dark:text-green-500">
                            Career Break
                          </p>
                      </div>
                    </div>
                  </div>

                  {/* Experience Item 1 */}
                  <div className="mb-10 ml-8">
                    <div className="absolute w-6 h-6 bg-blue-600 rounded-full -left-3 mt-2 border-4 border-white dark:border-gray-900"></div>
                    <div className="flex flex-row">
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                          Senior Software Developer
                        </h3>
                        <p className="text-sm text-blue-600 dark:text-blue-500">
                          ThoughtWorks | Client: International Auction Company | 2023 - 2023
                        </p>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                          ● Augmented data processing efficiency by 15% by streamlining data consumption across services. <br></br>
                          ● Increased throughput by 25% for Oracle EBS client through Kafka integration and endpoint optimization. <br></br>  
                          ● Drove 10% reduction in bugs, 10% increment in code quality, and 25% improvement in development
                            speed by mentoring team members in incorporating sensible defaults, effective pair programming, and
                            TDD practices into daily development routines.
                        </p>
                        <div className="mt-2">
                          <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
                            Java
                          </span>
                          <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
                            Spring Boot
                          </span>
                          <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
                            Kafka
                          </span>
                          <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
                            DataDog
                          </span>
                          <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
                            Honeycomb
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
                            ThoughtWorks | Client: Large Technology Conglomerate(FAANG) | 2020 - 2022
                        </p>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                          ● Boosted internal teams' financial oversight capabilities through end-to-end management of API endpoints. <br></br>
                          ● Led the implementation of API endpoints for internal teams to report itemized hardware/software
                            procurement, boosting organization-wide financial accountability from 10% to 70%.
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
                          <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
                            Kubernetes
                          </span>
                          <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
                            Flyway
                          </span>
                          <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
                            AWS S3
                          </span>
                          <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
                            Spring REST Docs
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience Item 3 */}
                <div className="mb-10 ml-8">
                    <div className="absolute w-6 h-6 bg-green-600 rounded-full -left-3 mt-2 border-4 border-white dark:border-gray-900"></div>
                    <div className="flex flex-row">
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                          Senior Software Developer
                        </h3>
                        <p className="text-sm text-green-600 dark:text-green-500">
                            ThoughtWorks | Client: Prominent E-Commerce Enterprise | 2019 - 2020
                        </p>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                          ● Maximized data ingestion efficiency by integrating microservice with Kafka. <br></br>
                          ● Raised TPS by 30% and slashed costs by 10% through implementation of concurrency logic. <br></br>
                          ● Achieved reduction in production incidents by establishing and deploying feature flag system. <br></br>
                          ● Decreased service downtime by 20% within cash offers program through microservice enhancements.
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