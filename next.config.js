/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  experimental: {
    typedRoutes: true, // router 선언의 유효성 체크, 오타 등
  },
    images: {
    loader: 'custom',
    loaderFile: './app/image.ts',
  },
}
 
module.exports = nextConfig