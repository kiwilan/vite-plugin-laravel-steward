/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#cfcdff',
          100: '#c4c0ff',
          200: '#b8b4ff',
          300: '#aca7ff',
          400: '#a09bff',
          500: '#948eff',
          600: '#8982ff',
          700: '#7b75e5',
          800: '#6d68cc',
          900: '#5f5bb2',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}