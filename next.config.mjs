import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "media3.giphy.com" }],
  },
};

export default nextConfig;
