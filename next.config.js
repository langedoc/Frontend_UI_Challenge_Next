/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  sassOptions: {
    includePaths: ['./src/scss'],
  },

  // If you need to support importing images
  images: {
    domains: [
      'image.tmdb.org',
    ],
  },
}

export default nextConfig
