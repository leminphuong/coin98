/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ FIX CORS DEV (_next/*)
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "https://coin.joydigi.net",
    "http://coinjdg.com",
    "https://coinjdg.com",
    "http://www.coinjdg.com",
    "https://www.coinjdg.com",
  ],

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

      // ⚠ wildcard wp.com KHÔNG được hỗ trợ
      // ❌ "*.wp.com" → SAI
      {
        protocol: "https",
        hostname: "s0.wp.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i0.wp.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
