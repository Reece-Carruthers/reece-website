/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #2c3e50, #3498db)'
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}