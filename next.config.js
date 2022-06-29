/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: () => [
    {
      source: "/auth",
      destination: "/login",
      permanent: false,
    },
  ],
  rewrites: () => [
    {
      source: "/login",
      destination: "/auth",
    },
  ],
};

module.exports = nextConfig;
