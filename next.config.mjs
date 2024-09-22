/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: "pbs.twimg.com",
            port: '',
          },
          {
            protocol: 'https',
            hostname: "www.freecodecamp.org",
            port: '',
          },
          {
            protocol: 'https',
            hostname: "nextjs.org",
            port: '',
          },
          {
            protocol: 'https',
            hostname: "reactjs.org",
            port: '',
          },
        ],
      },
    
};

export default nextConfig;
