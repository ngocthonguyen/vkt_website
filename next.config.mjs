/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // Root → default locale
      {
        source: '/',
        destination: '/vi',
        permanent: false,
      },
      // Paths without locale prefix → redirect to /vi/<path>
      {
        source: '/:path((?!vi|en|fr|_next|api|images|favicon|vkt-logo|android-chrome|apple-touch|robots\\.txt|sitemap\\.xml|site\\.webmanifest).*)',
        destination: '/vi/:path',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
