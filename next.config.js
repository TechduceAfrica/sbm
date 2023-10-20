/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "socialbrandmanagers.com",
      "res.cloudinary.com",
      "assets-social-brand-managers.netlify.app",
    ],
  },
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
    ];
  },
};

module.exports = nextConfig;
