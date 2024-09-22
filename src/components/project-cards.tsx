"use client";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import Link from "next/link";

export default function ProjectCards() {
  return (
    <section
      id="projects"
      className="flex flex-wrap mx-2  justify-center align-middle  "
    >
      <h1 className="text-xl font-semibold hover:underline ">My Projects</h1>
      {Array.from({ length: 4 }).map((_, index) => (
        <div
         key={index}
        
          className="max-w-xl    p-6  border-gray-200 rounded-lg shadow "
        >
          <a>
            <h5 className="mb-2 text-2xl font-normal tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <Link
            href="#skills"
            className="inline-flex items-center px-3 py-2 mx-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <GitHubLogoIcon />
          </Link>

          <Link
            href="#skills"
            className="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <GitHubLogoIcon />{" "}
          </Link>

        </div>
      ))}
    </section>
  );
}
