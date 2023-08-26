import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import NavBar from "../components/NavBar";
import ProjectSection from "../components/ProjectSection";

export const Head: HeadFC = () => <title>Nico - Software engineer</title>;

const projects = [
  {
    name: "Habit Tracker",
    description:
      "This app is designed to cater to individuals who are keen on enhancing their productivity, developing healthy habits and routines, and keeping track of their progress.",
    stack: ["React", "TypeScript", "Next.js", "Tailwind", "Firebase"],
    image: "/trakr-thumbnail.png",
    links: {
      github: "https://github.com/nsforero10/trakr-app",
      live: "https://habitrakr.vercel.app/",
    },
  },
  {
    name: "Techno Guide",
    description:
      "A web Tool that aims to simplify the process of discovering and exploring the diverse range of sub-genres that make up techno music.",
    stack: ["React", "TypeScript", "Next.js", "Tailwind", "Firebase"],
    image: "/techno-guide-thumbnail.png",
    links: {
      github: "https://github.com/nsforero10/techno-guide-app",
      live: "https://techno-guide.vercel.app/",
    },
  },
];

const ProjectsPage: React.FC<PageProps> = () => {
  return (
    <main className="flex flex-col items-center bg-black bg-projects-pattern bg-bottom bg-no-repeat bg-fit bg-fixed min-h-screen">
      <NavBar currentPage="projects" />
      <section className="flex flex-col grow pt-24 w-full max-w-5xl items-center p-2">
        <h1 className="text-5xl font-display mt-4 text-center max-w-sm">
          SOME THINGS I'VE BUILT
        </h1>
        <div className="flex flex-col mx-8 my-4 p-6  border border-teal gap-12 w-full">
          {projects.map((project, index) => (
            <ProjectSection
              project={project}
              position={index % 2 == 0 ? "left" : "right"}
            />
          ))}
        </div>
      </section>
    </main>
  );
};
export default ProjectsPage;
