/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      colors: {
        brand: {
          // 50: "#11ff9b",
          // 100: "#00f78f",
          // 200: "#00dd80",
          // 300: "#00c371",
          // 400: "#00aa63",
          // 500: "#007745",
          // 600: "#005e36",
          // 700: "#004427",
          // 800: "#002b19",
          // 900: "#00110a",
          ...colors.green,
        },
        accent: {
          ...colors.indigo,
        },
        grey: {
          ...colors.gray,
        },
      },
      fontFamily: {
        poppins: "Poppins, sans-serif",
        raleway: "Raleway, sans-serif",
      },
      backgroundImage: {
        mosaic: "url('/images/mosaic_bg.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "spin-slow": "spin 60s linear infinite",
        "bounce-slow": "bounce 10s linear infinite",
        wiggle: "wiggle 2s ease-in-out infinite",
        "wiggle-slow": "wiggle 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
