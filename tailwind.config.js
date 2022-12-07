/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        "3/10": "30%",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        "proxima-nova": ["Proxima Nova", "sans-serif"],
      },
    },
  },
  plugins: [],
};
