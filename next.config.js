const withPWA = require("next-pwa");
const widthPlugins = require("next-compose-plugins");
const runtimeCaching = require("next-pwa/cache");
const prod = process.env.NODE_ENV === "production";
const prodURL = "https://emoone.github.io/moone-page/";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: prod ? true : false,
  },
  assetPrefix: prod ? prodURL : "",
  images: {
    loader: "imgix",
    path: prod ? prodURL : "http://localhost:4444",
    domains: ["localhost"],
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    allowFutureImage: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    disableStaticImages: true, //정적 가져오기 비활성화
    remotePatterns: [
      {
        protocol: "https",
        hostname: prodURL,
      },
    ],
  },
};

module.exports = widthPlugins(
  [
    [
      withPWA,
      {
        pwa: {
          dest: "public",
          swSrc: "./sw.js",
          register: true,
          skipWaiting: true,
          reloadOnOnlines: true,
          disable: !prod,
          runtimeCaching,
        },
      },
    ],
  ],
  nextConfig
);
