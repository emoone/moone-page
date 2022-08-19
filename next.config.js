const withPWA = require("next-pwa");
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
    path: prod
      ? "https://emoone.github.io/moone-page/"
      : "http://localhost:4444",
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
