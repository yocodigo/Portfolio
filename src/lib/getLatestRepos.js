// lib/getLatestRepos.js
import axios from "axios";

const getLatestRepos = async (data) => {
  try {
    const username = data.githubUsername;

    const res = await axios.get(
      `https://the-civic-agenda.fly.dev/`
    );

    let repos = res.data.items;
    let latestSixRepos = repos.splice(0, 6);
    return latestSixRepos;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default getLatestRepos;