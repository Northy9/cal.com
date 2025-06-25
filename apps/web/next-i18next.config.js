const path = require("path");

/** @type {import("next-i18next").UserConfig} */
const config = {
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  localePath: path.resolve("./public/static/locales"),
  use: [], // Disable Cal.com i18n plugins (e.g. backend, crowdin)
};

module.exports = config;
