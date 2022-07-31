const env = require("./env-config");

module.exports = {
  presets: ["next/babel"],
  plugins: [
    [
      "@emotion",
      {
        sourceMap: true,
        autoLabel: "dev-only",
        labelFormat: "[local]",
        cssPropOptimization: true,
        ssr: true,
        displayName: true,
        preprocess: false,
      },
    ],
    ["transform-define", env],
  ],
};
