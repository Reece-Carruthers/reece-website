/** @type {import('tailwindcss').Config} */

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
          'sans': ['"JetBrains Mono"', 'ui-sans-serif', 'system-ui'],
      }
    },
  },
  plugins: [],
}