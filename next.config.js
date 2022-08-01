/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const nextConfig = {
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://emoone.github.io/moone-page"
      : "",
  images: {
    loader: "imgix",
    path: "https://emoone.github.io/moone-page",
  },
};

module.exports = withPlugins(
  [
    [
      withPWA,
      {
        pwa: {
          dest: "public",
          runtimeCaching,
        },
      },
    ],
  ],
  {
    reactStrictMode: true,
    images: {
      domains: ["d3in0pstm1ny80.akamaized.net"],
    },
  },
  nextConfig
);
