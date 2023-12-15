/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  basePath: '',
  output: {
    dir: 'standalone',
  },
};

module.exports = nextConfig;
