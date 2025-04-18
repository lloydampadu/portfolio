import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors and warnings during builds
  },
  typescript: {
    ignoreBuildErrors: true, // Ignores type errors during builds
  },
};

export default nextConfig;
