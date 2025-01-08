import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds:true, 
  },
  
};
module.exports = {
  images: {
    domains: ['images.unsplash.com'], // Add the domain here
  },
};

export default nextConfig;
