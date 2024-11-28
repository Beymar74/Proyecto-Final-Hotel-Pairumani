/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img.clerk.com', 'res.cloudinary.com'], // Agrega todos los dominios permitidos aquí
  },
};

module.exports = nextConfig;
