/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img.clerk.com'], // Agrega este dominio
  },
};

module.exports = nextConfig;
