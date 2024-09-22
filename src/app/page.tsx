import { ModeToggle } from "@/components/ui/toggle-button";
import Link from "next/link";
import {
  InstagramLogoIcon,
  GitHubLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { projectdata } from "@/data/projects";
import { a, div } from "framer-motion/client";
import WorkExperience from "@/components/work-experience";
import ProjectCards from "@/components/project-cards";
import Skill from "@/components/Skills";

export default function Home() {
  return (
    <>
    <main className="min-h-screen relative inset-0 rounded-full flex flex-col items-center mt-32 space-y-8 max-w-2xl mx-auto p-2  ">
      <div className="flex justify-between items-center">
        <div className="flex-1 space-y-5">
          <h1 className="font-bold">
            Pawan Pandey{" "}
            <span className="text-xs from-neutral-900 bg-gray-400 rounded-xl p-1">
              <a
                href="mailto:pandeypawan2061@gmail.com"
                className="cursor-pointer"
              >
                Let's contact
              </a>
            </span>
          </h1>
          <p className="max-w-sm text-pretty font-mono text-sm">
            Full-stack web developer exploring new opportunities and excited to
            work on exciting gigs.
          </p>

          <div className="flex space-x-2">
            <Link href="https://github.com" target="_blank" className="cursor-pointer">
              <span className="hover:text-gray-500">
                <GitHubLogoIcon />
              </span>
            </Link>
            <Link href="https://instagram.com" target="_blank" className="cursor-pointer">
              <span className="hover:text-gray-500">
                <InstagramLogoIcon />
              </span>
            </Link>
            <Link href="https://twitter.com" target="_blank" className="cursor-pointer">
              <span className="hover:text-gray-500">
                <TwitterLogoIcon />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src="https://pbs.twimg.com/profile_images/1750126817590087680/7AydU7yH_400x400.jpg"
            alt="Profile Picture"
            className="relative flex shrink-0 overflow-hidden rounded-xl size-28"
          />
        </div>
      </div>
      
      


        <WorkExperience/>
        <ProjectCards/>

      
          <Skill/>

          
      
       
     

     
     
     
    </main>
   


    </>

   
  );
}
