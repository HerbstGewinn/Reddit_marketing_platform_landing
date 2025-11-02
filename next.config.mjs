/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/apple-touch-icon.png',
        destination: '/apple-icon.svg',
        permanent: true,
      },
      {
        source: '/apple-touch-icon-precomposed.png',
        destination: '/apple-icon.svg',
        permanent: true,
      },
      {
        source: '/favicon.ico',
        destination: '/icon.svg',
        permanent: true,
      },
      {
        source: '/og.png',
        destination: '/icon.svg',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
