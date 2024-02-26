/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      screens:{
        "bigger":"414px"
      }
    },
  },
  plugins: [],
}