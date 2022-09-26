/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue17: "#1750FF",
      },
      backgroundImage: {
        "gradient-blue": "linear-gradient(270deg, #8743FF 0%, #4136F1 100%)",
      },
    },
  },
  plugins: [],
};
