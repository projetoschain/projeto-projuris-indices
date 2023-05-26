/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "static-cse.canva.com",
      "ibb.co/TwZrBp0",
      "i.imgur.com",
      "i.ibb.co",
      "i.ytimg.com",
      "yt3.ggpht.com",
      "i3.ytimg.com",
    ],
  },
  
};

module.exports = nextConfig;
