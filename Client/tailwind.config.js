/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0057FF",
        secondary: "#40CCCC",
        backdrop: "#000000bf",
        highlight: "#ADADAD",
        background: "#222123",
      },
      fontFamily: {
        ptsans: ["PT Serif", "serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
