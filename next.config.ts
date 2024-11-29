/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img.clerk.com', 'res.cloudinary.com'], // Agrega todos los dominios permitidos aquí
  },
  typescript: {
    ignoreBuildErrors: true, // Ignorar errores de TypeScript durante la construcción
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignorar errores de ESLint durante la construcción
  },
};

module.exports = nextConfig;
