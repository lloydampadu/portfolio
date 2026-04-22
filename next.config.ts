import type { NextConfig } from "next";

const nextConfig: NextConfig = {
<<<<<<< HEAD
  typescript: {
    ignoreBuildErrors: true,
=======
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors and warnings during builds
  },
  typescript: {
    ignoreBuildErrors: true, // Ignores type errors during builds
>>>>>>> d9a8fcb28aa01cc1a71bfec332e0550747bb66ae
  },
};

export default nextConfig;
