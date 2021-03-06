const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: "380px"
      }
    },
    colors: {
      transparent: "transparent",
      grey: colors.coolGray,
      primary: {
        DEFAULT: "#000023",
        light: "#44295F"
      },
      secondary: {
        DEFAULT: "#19BF6F"
      },
      red: "#E50914",
      white: "white",
      extend: {
        spacing: {
          128: "32rem",
          144: "36rem"
        }
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"]
      }
    },
    variants: {
      extend: {}
    },
    plugins: []
  }
};
