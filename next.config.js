/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true, // router 선언의 유효성 체크, 오타 등
  },
}
 
module.exports = nextConfig