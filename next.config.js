const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  i18n: {
    locales: ["en", "nb"],
    defaultLocale: "en",
  },
  pwa: {
    dest: "public",
    runtimeCaching,
    disable: true, //process.env.NODE_ENV === "development",
  },
});
