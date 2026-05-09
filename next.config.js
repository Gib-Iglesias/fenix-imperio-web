/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // unoptimized: true for static export / Netlify without image CDN
    // Set to false if deploying to Vercel (which has built-in image optimization)
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: '**' }
    ],
  },
};

module.exports = nextConfig;
