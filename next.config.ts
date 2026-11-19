import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // A server of its own, with only the files it needs, for the Docker image
  output: 'standalone',
};

export default nextConfig;
