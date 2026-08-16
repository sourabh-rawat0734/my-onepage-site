import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* output: "export", */ // <-- REMOVED so API routes can run on Cloudflare Workers
  images: {
    unoptimized: true,
  },
};

export default nextConfig;