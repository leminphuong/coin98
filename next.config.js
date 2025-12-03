/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "admin.coinjdg.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "admin.coinjdg.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "coin.joydigi.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "files.amberblocks.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.wp.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
