/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        "1/20": "5%",
        "1/10": "10%",
        "1/5": "20%",
        "1/4": "25%",
      },
      fontFamily: {
        "oswald": ["Oswald", "sans-serif"],
        "proxima-nova": ["Proxima Nova", "sans-serif"],
        "inter": ["Inter", "sans_serif"]
      },
      lineHeight: {
        12: "3rem",
      },
      colors: {
        primary: "#7D0202",
        bgPrimary: "#FFFDF5"
      },
    },
  },
  plugins: [],
};
