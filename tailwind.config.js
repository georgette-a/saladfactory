const colors = require('tailwindcss/colors')
module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      sans:['Poppins', 'sans-serif'],
    },
    extend: {
      colors:{
      'sf-dark-green':'#219653',
      'sf-green':'#27AE60',
      'sf-light-green':'#6FCF97'
    }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
