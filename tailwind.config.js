/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
      },
      width: {
        "sm-card": "80px",
        "md-card": "180px",
      },
      height: {
        "sm-card": "120px",
        "md-card": "220px",
      },
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [],
};
