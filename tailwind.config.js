/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      grayscale: {
        90: "90%",
      },
      spacing: {
        114: "28rem",
        128: "32rem",
        144: "36rem",
      },
      screens: {
        xmd: { max: "900px" },
        xsm: { max: "630px" },
        xsmall: { max: "400px" },
      },
    },
  },
  plugins: [],
};
