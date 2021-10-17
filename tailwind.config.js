const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend:{
      screens:{
        xs:"380px"
      }
    },
    colors: {
      grey: colors.coolGray,
      primary: {
        DEFAULT: "#000133",
        light: "#44295F",
      },
      secondary: {
        DEFAULT: "#19BF6F",
      },
      white: "white",
      extend: {
        spacing: {
          128: "32rem",
          144: "36rem",
        },
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
