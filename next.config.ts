import type { NextConfig } from "next";
import path from "path";

const variablesPath = path.join(process.cwd(), "src", "scss", "variables").replace(/\\/g, "/");

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(process.cwd(), "src", "scss")],
    additionalData: `@use "${variablesPath}" as *;`,
  } as any,
};

export default nextConfig;