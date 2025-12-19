import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["alem.trading", "college.alem.trading", "*.alem.trading"],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
