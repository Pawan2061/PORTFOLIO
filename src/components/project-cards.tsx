"use client";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

import Link from "next/link";
import { projectdata } from "@/data/projects";

export default function ProjectCards() {
  return (
    <section
      id="projects"
      className="flex flex-wrap mx-2  justify-center align-middle  "
    >
      <h1 className="text-xl font-semibold hover:underline ">My Projects</h1>
      {projectdata.map((prj, i) => (
        <div
          key={i}
          className="max-w-xl    p-6  border-gray-200 rounded-lg shadow "
        >
          <a>
            <h5 className="mb-2 text-2xl font-normal tracking-tight text-gray-900 dark:text-white">
              {prj.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {prj.description}
          </p>
          <Link
            href={prj.githubUrl}
            className="inline-flex items-center px-3 py-2 mx-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <GitHubLogoIcon />
          </Link>

          <Link
            href={prj.projectUrl}
            className="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <ExternalLinkIcon />
          </Link>
        </div>
      ))}
    </section>
  );
}
