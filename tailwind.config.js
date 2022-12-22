/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        "1/20": "5%",
        "1/10": "10%",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        "proxima-nova": ["Proxima Nova", "sans-serif"],
      },
      lineHeight: {
        12: "3rem",
      },
    },
  },
  plugins: [],
};
