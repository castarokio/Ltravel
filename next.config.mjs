import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(fileURLToPath(import.meta.url));
const isGitHubPages = process.env.GITHUB_PAGES === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: projectRoot,
  ...(isGitHubPages
    ? {
        output: "export",
        trailingSlash: true,
        basePath: "/land",
        assetPrefix: "/land/",
        images: {
          unoptimized: true
        }
      }
    : {
        async redirects() {
          return [
            {
              source: "/tourisme",
              destination: "/tourism",
              permanent: true
            }
          ];
        }
      })
};

export default nextConfig;
