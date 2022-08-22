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
          reloadOnOnlines: true,
          disable: prod ? false : true,
          runtimeCaching,
        },
      },
    ],
  ],
  nextConfig
);
