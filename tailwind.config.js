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
      black: "#6B755",
      gold: "#f0DC82",
    },
    extend: {
      fontFamily: {
        artifexCF: "var(--font-artifexCF)",
        utsaah: "var(--font-utsaah)",
      },
    },
  },
  plugins: [],
};
