import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/fixitruck-landing' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/fixitruck-landing' : '',
};

export default nextConfig;