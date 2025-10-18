import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  distDir: 'docs',
  trailingSlash: true,
  basePath: '/my-resume',
  assetPrefix:'/my-resume/'
};

export default nextConfig;
