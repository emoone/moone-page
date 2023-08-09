/**
 * @type {import('next').NextConfig}
 */
const isDev = process.env.NEXT_PUBLIC_ENVIRONMENT === 'DEV';

const nextConfig = {
  output: 'export', // github action 배포와 연관
  
  experimental: {
    // unoptimized:true, // 최적화 하지 않음
    serverActions: true,
    typedRoutes: true, // router 선언의 유효성 체크, 오타 등
     turbotrace: {
      // control the log level of the turbotrace, default is `error`
      // logLevel?: 'bug'| 'fatal'| 'error'| 'warning'| 'hint'| 'note'| 'suggestions'| 'info',
      // control if the log of turbotrace should contain the details of the analysis, default is `false`
      // logDetail?: boolean,
      // show all log messages without limit
      // turbotrace only show 1 log message for each categories by default
      // logAll?: boolean,
      // control the context directory of the turbotrace
      // files outside of the context directory will not be traced
      // set the `experimental.outputFileTracingRoot` has the same effect
      // if the `experimental.outputFileTracingRoot` and this option are both set, the `experimental.turbotrace.contextDirectory` will be used
      // contextDirectory?: string,
      // if there is `process.cwd()` expression in your code, you can set this option to tell `turbotrace` the value of `process.cwd()` while tracing.
      // for example the require(process.cwd() + '/package.json') will be traced as require('/path/to/cwd/package.json')
      // processCwd?: string,
      // control the maximum memory usage of the `turbotrace`, in `MB`, default is `6000`.
      // memoryLimit?: number,
    },
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
    domains:['unsplash.com','picsum.photos'], // 허용 도메인
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // 사용자 예상 단말기 사이즈
  },
}
 
module.exports = nextConfig