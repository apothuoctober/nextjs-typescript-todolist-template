/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
