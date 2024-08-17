/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgGradientFrom: "#1e3756",
        bgGradientTo: "#161f40",
      },
    },
  },
  plugins: [],
};

