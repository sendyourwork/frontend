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
      width: {
        '500px': '500px',
        '750px': '750px',
        '1000px': '1000px',
      },
      maxWidth: {
        '3/4': '75%'
      },
      height: {
        '15vh': '15vh',
        '20vh': '20vh',
        '85vh': '85vh'
      },
      colors: {
        "main": "#4158D0",
        "highlight": "#2b2b2b",
        "greenLight": "#27AE60",
        "yellowLight": "#FFCD1D",
        "orangeLight": "#F98453",
      },
      outline: {
        main: ['2px solid #4158D0']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
