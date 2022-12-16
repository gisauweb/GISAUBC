/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      },
      colors: {
        primary: "#7D0202",
      }
    },
  },
  plugins: [],
};
