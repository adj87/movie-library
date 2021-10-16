const taildwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = {
  style: {
    postcss: {
      plugins: [taildwindcss, autoprefixer],
    },
  },
};
