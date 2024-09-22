import { GitHubLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Link } from "lucide-react";

export default  function PersonalInfo(){
    return(
        <div className="flex justify-between items-center">
        <div className="flex-1 space-y-5">
          <h1 className="font-bold">
            Pawan Pandey{" "}
            <span className="text-xs from-neutral-900 bg-gray-400 rounded-xl p-1">
              <a
                href="mailto:pandeypawan2061@gmail.com"
                className="cursor-pointer"
              >
                Let's talk
              </a>
            </span>
          </h1>
          <p className="max-w-sm text-pretty font-mono text-sm">
            Full-stack data  developer exploring new opportunities and excited to
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
    )
}