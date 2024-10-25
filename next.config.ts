/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.tango.us',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig