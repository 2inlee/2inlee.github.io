const debug = process.env.NODE_ENV !== 'production'
const name = 'inlee_site'

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: !debug ? `/${name}/` : '',
  basePath: '/inlee_site',
  trailingSlash: true,
  experimental: {
    appDir: true,
  },
}
module.exports = nextConfig
