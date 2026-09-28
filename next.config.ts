import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // kwikflow.io is a custom domain, so assets must be served from the root ("/")
  basePath: process.env.BASE_PATH || "",
};

export default nextConfig;
