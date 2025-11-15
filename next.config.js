/** Next.js configuration to allow remote images used in many pages */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "placehold.it",
        port: "",
        pathname: "/**",
      }
    ],
    // If you want to disable built-in optimization (not recommended for production),
    // you could set unoptimized: true
  },
  // preserve any existing config needs (add additional keys here)
};

module.exports = nextConfig;