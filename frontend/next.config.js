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
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_API_URL: 'https://legalizeme.azurewebsites.net',
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: '23513792180-r3v885emeo3dtbggi4c06b409ebaup0d.apps.googleusercontent.com', // Replace with your actual Google Client ID
  },
}

module.exports = nextConfig