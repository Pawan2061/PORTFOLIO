/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.freecodecamp.org",
        port: "",
      },
      {
        protocol: "https",
        hostname: "nextjs.org",
        port: "",
      },
      {
        protocol: "https",
        hostname: "reactjs.org",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.drupal.org",
        port: "",
      },
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
      },
      { protocol: "https", hostname: "banner2.cleanpng.com", port: "" },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
      },
    ],
  },
};

export default nextConfig;
