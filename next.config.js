const { i18n } = require("./next-i18next.config");
const path = require("path");

module.exports = {
  reactStrictMode: true,
  i18n,
  sassOptions: {
    includePaths: [path.join(__dirname, "src/components")],
  },
};
