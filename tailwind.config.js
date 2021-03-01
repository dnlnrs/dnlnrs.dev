const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false,
  theme: {
    colors: {
      ...colors,
      primary: '#008080'
    },
    extend: {
      transitionProperty: {
        'display': 'display'
      }
    },
    fontFamily: {
      body: ['Overpass', 'sans-serif']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
