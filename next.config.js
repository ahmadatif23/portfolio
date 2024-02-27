/** @type {import('next').NextConfig} */

const runtimeCaching = require("next-pwa/cache");

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
});

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: '/portfolio'
};

module.exports = withPWA(nextConfig);