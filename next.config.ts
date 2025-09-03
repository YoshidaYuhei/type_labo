import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep transpiling RN Web for SSR/edge compatibility
  transpilePackages: ["react-native-web"],
};

export default nextConfig;
