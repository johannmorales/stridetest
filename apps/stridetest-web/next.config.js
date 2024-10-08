/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/proxy/:path*",
        destination: "/api/proxy/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
