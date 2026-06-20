/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Keep three.js / R3F out of the server bundle quirks
  transpilePackages: ["three"],
};

module.exports = nextConfig;
