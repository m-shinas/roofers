import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true, // or false for temporary redirects
      },
    ];
  }
};

export default nextConfig;
