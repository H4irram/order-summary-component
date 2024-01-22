/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      paleBlue: "hsl(225, 100%, 94%)",
      brightBlue: "hsl(245, 75%, 52%)",
      veryPaleBlue: "hsl(225, 100%, 98%)",
      desaturatedBlue: "hsl(224, 23%, 55%)",
      darkBlue: "hsl(223, 47%, 23%)",
    },
    fontFamily: {
      redHat: ["Red Hat Display", "sans-serif"],
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
};
