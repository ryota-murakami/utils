const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './packages/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('@tailwindcss/forms')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
