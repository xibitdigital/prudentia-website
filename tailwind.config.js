/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        "teal-soft": "#4FD1C7",
        "blue-gentle": "#60A5FA",
        sage: "#9CA3AF",
        "warm-white": "#FEFEFE",
        ocean: "#0EA5E9",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
