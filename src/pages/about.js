import React from "react";
import ContainerBlock from "../components/ContainerBlock";

export default function About() {
  return (
    <ContainerBlock
      title="About - Joel Hernandez"
      description="Learn more about me, my background, and what I do"
    >
      <section className="bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
          <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
            About Me
          </h1>
        </div>
        <div className="bg-[#F1F1F1] dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-4 py-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1">
                <div className="h-full rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800">
                  <div className="p-4">
                    <div className="w-full h-96 rounded-lg bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                      {/* <p className="text-gray-600 dark:text-gray-400 text-xl">Your Photo</p> */}
                    {/* <div className="image-container"> */}
                        <img 
                            src="images/headshot2.jpg" 
                            alt="Professional headshot"
                        />
                    {/* </div> */}
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">
                      Joel Hernandez
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mt-2">
                      Full Stack Engineer
                    </p>
                    <div className="flex mt-4 space-x-4">
                      <a href="https://github.com/yocodigo" target="_blank" rel="noopener noreferrer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          className="text-xl text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.923.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                      <a href="https://www.linkedin.com/in/joelhdev/" target="_blank" rel="noopener noreferrer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          className="text-xl text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <div className="h-full rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 p-6">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Biography
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                    I consider myself the inquisitive type. I’m driven by an insatiable curiosity and a relentless desire to solve real-world problems through technology. 
                    I've leveraged that innate curiosity and my strong work ethic to always deliver in high-stakes situations to some 
                    of the most prominent tech companies in the world. The experience I've gained and my strong appetite for knowledge and building cool things have made 
                    me who I am today. I am proficient in Java and have a strong background in back-end development, database management, optimizing code, implementing 
                    best practices, enhancing system performance and scalability, improving API functionality, and microservices architecture. Thru that experience, I've 
                    also excelled in coordinating with teams, leading development initiatives, and exceeding high-profile client expectations. 
                    For example, on several occassions, I lead cross-functional teams to successfully deliver high-stakes projects under tight deadlines. <br></br><br></br>   

                    I always stay committed to continuous learning, by staying ahead of the latest trends and technologies that push the boundaries 
                    of innovation. Recently, I’ve been building apps using a modern tech stack, including Next.Js, Python, and cutting-edge large 
                    language models such as Google’s NotebookLM and OpenAI’s Assistants API. This journey has allowed me to create intuitive, 
                    scalable applications that solve real-world challenges. <br></br><br></br> 

                    Moving forward, I’m excited to continue evolving my skills, diving deeper into AI and machine learning, and exploring new ways 
                    to apply these technologies to build smarter, more efficient solutions for tomorrow’s challenges.

                  </p>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
                    Skills
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Frontend
                      </h3>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                        <li>HTML, CSS, JavaScript</li>
                        <li>React.js, Next.js</li>
                        <li>TailwindCSS, SASS</li>
                        <li>Responsive Design</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Backend
                      </h3>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                        <li>Java, Python</li>
                        <li>PostgreSQL</li>
                        <li>RESTful APIs</li>
                        <li>Kafka, Flyway, Fly.io, Jenkins</li>
                        <li>Swagger, Splunk, DataDog, Honeycomb</li>
                      </ul>
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
                    Education
                  </h2>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Bachelor of Science in Industrial Technology, Minor in Business
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      San Jose State University
                    </p>
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