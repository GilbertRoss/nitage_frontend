/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nitage-green': '#B2DB1F',
        'primary': '#B2DB1F'
      }
    },
  },
  plugins: [require("daisyui")],
}
