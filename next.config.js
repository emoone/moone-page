/**
 * @type {import('next').NextConfig}
 */

const { withSentryConfig } = require('@sentry/nextjs');

const isDev = process.env.NEXT_PUBLIC_ENVIRONMENT === 'DEV';

const nextConfig = {
  // reactStrictMode: true,
  output: 'export', // github action 배포와 연관
  // assetPrefix: isDev ? 'https://emoone.github.io/moone-page/' : undefined,
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: 'bottom-right',
  },
  experimental: {
    // unoptimized:true, // 최적화 하지 않음
    appDir: true,
    // serverActions: true, // 이거 아직 버그... 빌드 에러... 아우 짱나
    typedRoutes: false, // router 선언의 유효성 체크, 오타 등
  },
  images: {
    // remotePatterns: [{ // 외부 이미지 사용시 활성화
    //   protocol: 'https',
    //   hostname: 'unsplash.com',
    //   port: '',
    //   pathname:'/photos/**',
    // }],
    // formats: ['image/webp', 'image/avif'], // 이미지 포맷, avif 초반 인코딩 20% 더 걸리지만 webp에 비해 20% 더 작음, 처음 요청 느리지만 캐시후 속도는 더빠름
    path: '/',
    loader: 'custom',
    minimumCacheTTL: 60, // 이미지 캐시만료, 초단위
    loaderFile: './src/app/image.ts', // nextimage 대신 cloud 사용 희망시
    domains: ['unsplash.com', 'picsum.photos'], // 허용 도메인 리스트
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // 사용자 예상 단말기 사이즈
  },
};

module.exports = nextConfig;
