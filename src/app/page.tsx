import { ModeToggle } from "@/components/ui/toggle-button";
import Link from "next/link";
import {
  InstagramLogoIcon,
  GitHubLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Arrow } from "@radix-ui/react-dropdown-menu";

export default function Home() {
  return (
    <div className="min-h-screen relative flex flex-col items-center  mt-32  space-y-8  max-w-2xl mx-auto  p-2">
      <div className="flex justify-between items-center">
        <div className="flex-1 space-y-5">
          <h1 className="font-bold">
            "Pawan Pandey"{" "}
            <span className="text-xs from-neutral-900 bg-gray-400 rounded-xl p-1  ">
              {" "}
              <a href="mailto:pandeypawan2061@gmail.com">Let's talk</a>
            </span>
          </h1>
          <p className="max-w-sm text-pretty font-mono text-sm">
            Full-stack web developer exploring new oppourtunites and exicted to
            work on exciting gigs.
          </p>

          <div className="flex  space-x-2">
            <Link href="/" className="cursor-zoom-in hover:bg-gray-800">
              {" "}
              <span className="">
                <GitHubLogoIcon />
              </span>
            </Link>
            <Link href="/">
              <InstagramLogoIcon />
            </Link>

            <Link href="/" className="cursor-zoom-in hover:size-10">
              {" "}
              <span className="">
                <GitHubLogoIcon />
              </span>
            </Link>
            <Link href="/">
              <InstagramLogoIcon />
            </Link>
          </div>
        </div>
        <div>
          <img
            src="https://pbs.twimg.com/profile_images/1750126817590087680/7AydU7yH_400x400.jpg"
            alt=""
            className="relative flex shrink-0 overflow-hidden rounded-xl size-28"
          />
        </div>
      </div>

      <div className="flex flex-col justify-between max-w-xl gap-4">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          Work Experience
        </h3>

        <div className=" flex flex-col bg-white border border-t-4 border-t-gray-600 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:border-t-gray-500 dark:shadow-neutral-700/70">
          <div className="p-4 md:p-5 ">
            <a href="#" className="cursor-pointer">
              Hyperce Technologies Pvt Ltd
            </a>

            <p className="mt-2 text-gray-500 dark:text-neutral-400">
              In hyperce I have worked on projects that uses nestjs,graphql and
              typeorm as backend technologies and nextjs for frontend.
            </p>
            <div>
              <h1 className="text-xs   text-white font-medium">
                May,2024 &#x2192; Sep,2024
              </h1>
            </div>
          </div>
        </div>


        <div className=" flex flex-col bg-white border border-t-4 border-t-gray-600 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:border-t-gray-500 dark:shadow-neutral-700/70">
          <div className="p-4 md:p-5 ">
            <a href="#" className="cursor-pointer">
              Technial Lead at Anova Club,CSE-Data-Science Jain University
            </a>

            <p className="mt-2 text-gray-500 dark:text-neutral-400">
              In hyperce I have worked on projects that uses nestjs,graphql and
              typeorm as backend technologies and nextjs for frontend.
            </p>
            <div>
              <h1 className="text-xs   text-white font-medium">
                May,2024 &#x2192; Sep,2024
              </h1>
            </div>
          </div>
        </div>

      </div>

      <div>3</div>
    </div>
  );
}
