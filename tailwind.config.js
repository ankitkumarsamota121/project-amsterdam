module.exports = {
  theme: {
    fontFamily: {
      sans: [
        'raleway',
        'Segoe UI',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ]
    },
    extend: {
      backgroundImage: () => ({
        'hero-pattern': "url('/public/img/hero.jpg')"
      })
    }
  }
};
