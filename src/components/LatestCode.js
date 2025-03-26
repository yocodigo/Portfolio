// components/LatestCode.js
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