/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    themes:["cupcake"]
  },
  plugins: [require("daisyui")],
}
