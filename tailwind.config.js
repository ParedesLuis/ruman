module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        hamburguer: "url('https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg')"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

