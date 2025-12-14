/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // appDir is enabled by default in modern Next.js versions; remove experimental flag
  images: {
    domains: ["www.example.com"]
  },
  async headers() {
    return [
      {
        source: "/.well-known/farcaster.json",
        headers: [
          { key: "Content-Type", value: "application/json" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Cache-Control", value: "public, max-age=60" }
        ]
      }
    ];
  }
};

module.exports = nextConfig;
