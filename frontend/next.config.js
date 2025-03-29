/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.rareblocks.xyz',
        port: '',
        pathname: '/collection/**',
      },
    ],
  },
}

module.exports = nextConfig 