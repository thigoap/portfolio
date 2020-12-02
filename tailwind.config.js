module.exports = {
  purge: {
    enabled: true,
    content: ['./src/site/**/*.njk'],
  },
  theme: {
    fontFamily: {
      sans: ['"Maven Pro"', 'sans-serif'],
      header: ['"Baloo 2"', 'cursive'],
    },
    extend: {
      gridTemplateColumns: {
        '00': 'repeat(auto-fit, minmax(240px, 1fr))'
      },
      colors: {
        'herocard': '#e2e8f0',
        'buttonbg': '#2c7a7b',
        'buttonhover': '#319795',
        'buttontext': '#fff',
        'footerbg': '#fff'
      }
    },
  },
  variants: {},
}