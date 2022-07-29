/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig

module.exports = {
  assetPrefix:
    process.env.NODE_ENV === "production" ? "https://emoone.github.io" : "",
};
