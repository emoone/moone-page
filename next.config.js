const withPWA = require("next-pwa");
const prod = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: prod ? true : false,
  },
  assetPrefix: prod ? "https://emoone.github.io/moone-page" : "",
  images: {
    loader: "imgix",
    path: "https://emoone.github.io/moone-page",
  },

  pwa: {
    dest: "public",
    disable: prod ? true : false,
    register: true,
  },
};

module.exports = () => {
  const plugins = [withPWA];
  const config = plugins.reduce((acc, next) => next(acc), {
    ...nextConfig,
  });
  return config;
};
