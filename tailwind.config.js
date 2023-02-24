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
      cardWhite: "#D9D9D9",
      bgWhite: "#FAF9F6",
    },
    extend: {
      fontFamily: {
        artifexCF: "var(--font-artifexCF)",
        quicksand: "var(--font-quicksand)",
        utsaah: "var(--font-utsaah)",
      },
    },
  },
  plugins: [require("tailwindcss-3d")],
};
