import React, { useEffect, useState } from "react";
import GithubRepoCard from "./GithubRepoCard";
import getLatestRepos from "../lib/getLatestRepos";

export default function LatestCode({ githubUsername }) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      let latestRepos = await getLatestRepos({ githubUsername });
      setRepos(latestRepos);
    };
    
    fetchRepos();
  }, [githubUsername]);

  return (
    <section className="bg-[#F1F1F1] dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-3xl lg:text-5xl text-gray-800 dark:text-gray-100 font-bold text-center mb-12">
            Latest Code
          </h1>
          <a
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            className="mb-20 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center dark:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-up-right-square"
              stroke="4"
              strokeWidth="4"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
              />
            </svg>
            <p>View GitHub</p>
          </a>
        </div>
        
        {repos && repos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-10 gap-y-20">
            {repos.map((latestRepo, idx) => (
              <GithubRepoCard latestRepo={latestRepo} key={idx} />
            ))}
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-xl text-gray-600 dark:text-gray-400">
              No repositories found. Check your GitHub username.
            </h2>
          </div>
        )}
      </div>
    </section>
  );
}