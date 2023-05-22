/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd2d4rtarj3og8s.cloudfront.net',
        port: '',
        pathname: '/cheryl/**',
      },
    ],
  },
}

module.exports = nextConfig
