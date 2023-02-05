/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      red: "#c50d0d",
      white: "#FAFAFA",
      black: "#000000",
      gold: "#f0DC82",
      brown: "#4D3938",
      gray: "#1a1a1a",
    },
    extend: {
      fontFamily: {
        artifexCF: "var(--font-artifexCF)",
        utsaah: "var(--font-utsaah)",
        graphik: "var(--font-graphik)",
        opensans: "var(--font-opensans)",
      },
    },
  },
  plugins: [],
};
