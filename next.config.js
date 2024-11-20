/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  sassOptions: {
    includePaths: ['./src/scss'],
    prependData: `@import "variables";`
  },

  images: {
    domains: [
      'image.tmdb.org',
    ],
  },
}

module.exports = nextConfig
