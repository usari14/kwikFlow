import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.GITHUB_ACTIONS === "true" && process.env.GITHUB_REPOSITORY?.split("/")[1] && !process.env.GITHUB_REPOSITORY.split("/")[1].endsWith(".github.io") ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}` : "",
};

export default nextConfig;
