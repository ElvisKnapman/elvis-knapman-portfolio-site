/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  images: {
    loader: "akamai",
    path: "",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "_variables.scss";`,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
