/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["fakeimg.pl"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
