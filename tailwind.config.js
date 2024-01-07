/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1440px",
    },
    extend: {},
  },
  plugins: [],
}

