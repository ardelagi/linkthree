import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // React strict mode sudah default di Next.js 16
  reactStrictMode: true,
};

export default nextConfig;
