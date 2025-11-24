/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.amberblocks.com",
      },
      {
        protocol: "https",
        hostname: "coin.joydigi.net", // giữ domain cũ nếu bạn còn dùng
      },
    ],
  },
};

module.exports = nextConfig;
