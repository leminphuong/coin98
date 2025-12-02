/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.coinjdg.com",
      },
      {
        protocol: "https",
        hostname: "coin.joydigi.net",
      },
      {
        protocol: "https",
        hostname: "files.amberblocks.com",
      },
      {
        protocol: "https",
        hostname: "**.wp.com", // nếu WP image proxy
      },
    ],
  },
};

module.exports = nextConfig;
