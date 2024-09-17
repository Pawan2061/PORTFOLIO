import { ModeToggle } from "@/components/ui/toggle-button";
import Link from "next/link";
import {
  InstagramLogoIcon,
  GitHubLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import ProjectCards from "@/components/project-cards";

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



      <div className="flex flex-col justify-between">
        <div><ProjectCards/>
        </div>
        
      </div>
      <div>3</div>
      <div>4</div>
    </div>
  );
}
