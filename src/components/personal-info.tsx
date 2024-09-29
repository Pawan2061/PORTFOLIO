import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Link } from "lucide-react";
import Image from "next/image";
import { socialLinks } from "@/data/socials";
export default function PersonalInfo() {
  return (
    <div id="me" className="flex justify-between items-center">
      <div className="flex-1 space-y-5">
        <h1 className="font-bold">
          Pawan Pandey{" "}
          <span className="text-xs from-neutral-900 bg-gray-400 rounded-xl p-1">
            <a
              href="mailto:pandeypawan2061@gmail.com"
              className="cursor-pointer"
            >
              Let&apos;s talk
            </a>
          </span>
        </h1>
        <p className="max-w-sm text-pretty font-mono text-sm">
          Full-stack data developer exploring new opportunities and excited to
          work on exciting gigs.
        </p>
        {socialLinks.map((social, i) => (
          <div key={i} className="flex space-x-2">
            <Link
              href={social.github}
              target="_blank"
              className="cursor-pointer"
            >
              <span className="hover:text-gray-500">
                <GitHubLogoIcon />
              </span>
            </Link>
            <Link
              href={social.insta}
              target="_blank"
              className="cursor-pointer"
            >
              <span className="hover:text-gray-500">
                <InstagramLogoIcon />
              </span>
            </Link>
            <Link
              href={social.twitter}
              target="_blank"
              className="cursor-pointer"
            >
              <span className="hover:text-gray-500">
                <TwitterLogoIcon />
              </span>
            </Link>
          </div>
        ))}
      </div>

      <div>
        <Image
          height={112}
          width={112}
          src="https://pbs.twimg.com/profile_images/1750126817590087680/7AydU7yH_400x400.jpg"
          alt="Profile Picture"
          className="relative flex shrink-0 overflow-hidden rounded-xl size-28"
        />
      </div>
    </div>
  );
}
