import Head from "next/head";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <ContainerBlock
      title="Joel - Web Developer"
      description="A portfolio template built with Next.js and Tailwind CSS."
    >
      <Hero />
      <FavouriteProjects />
      <LatestCode githubUsername="yocodigo" />
    </ContainerBlock>
  );
}