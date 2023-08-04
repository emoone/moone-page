/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  
  // output: 'export', // github action 배포와 연관
  experimental: {
    // unoptimized:true, // 최적화 하지 않음
    serverActions: true,
    typedRoutes: true, // router 선언의 유효성 체크, 오타 등
  },
  images: {
    // remotePatterns: [{ // 외부 이미지 사용시 활성화
    //   protocol: 'https',
    //   hostname: 'unsplash.com',
    //   port: '',
    //   pathname:'/photos/**',
    // }],
    // formats: ['image/webp', 'image/avif'], // 이미지 포맷, avif 초반 인코딩 20% 더 걸리지만 webp에 비해 20% 더 작음, 처음 요청 느리지만 캐시후 속도는 더빠름
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // 사용자 예상 단말기 사이즈
    domains:['unsplash.com','picsum.photos'], // 허용 도메인
    // loader: 'akamai',
    // loaderFile: './src/app/image.ts', // nextimage 대신 cloud 사용 희망시
    minimumCacheTTL: 60, // 이미지 캐시만료, 초단위
  },
}
 
module.exports = nextConfig