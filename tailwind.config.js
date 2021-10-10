// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      jetbrains: ['JetBrains Mono', 'monospace'],
      montserrat: ['Montserrat', 'Arial']
    },
    extend: {
      gridTemplateColumns: {
        'home': '1fr 400px'
      },
      maxWidth: {
        '3/4': '75%'
      }
    },
    colors: {
      main: "#4158D0",
      gray: "gray"
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
