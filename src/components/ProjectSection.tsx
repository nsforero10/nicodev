import { faGithub, faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import * as React from "react";

interface ProjectSectionProps {
  project: Project;
  position: "left" | "right";
}

export default function ProjectSection({
  project,
  position,
}: ProjectSectionProps) {
  const positionClass =
    position === "left"
      ? "md:flex-row md:text-right"
      : "md:flex-row-reverse md:text-left";
  return (
    <div className={`flex justify-between ${positionClass} min-h-[300px]`}>
      <img
        src={project.image}
        className="hidden md:block absolute h-300 w-auto z-[1]"
      />
      <div
        className={`flex flex-col justify-center ${
          position == "right" ? "md:items-start" : "md:items-end"
        } grow z-[2] w-min bg-dark-teal-50 md:bg-transparent gap-2 p-4`}
      >
        <h2 className={`font-display text-4xl text-teal`}>{project.name}</h2>
        <div className=" p-3 bg-gray  max-w-prose">
          <p className="text-base font-thin ">{project.description}</p>
        </div>
        <div className=" flex flex-wrap gap-3 py-3 text-teal font-light">
          {project.stack.map((tech) => (
            <span className="bg-black border border-solid border-dark-teal p-1">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <Link to={project.links.github} target="_blank">
            <FontAwesomeIcon className="text-xl" icon={faGithub} />
          </Link>
          <Link to={project.links.live} target="_blank">
            <FontAwesomeIcon
              className="text-xl"
              icon={faArrowUpRightFromSquare}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
