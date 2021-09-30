module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      jetbrains: ['JetBrains Mono', 'monospace']
    },
    extend: {
      gridTemplateColumns: {
        'home': '1fr 400px'
      },
      maxWidth: {
        '3/4': '75%'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
