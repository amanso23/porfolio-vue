/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    darkMode: 'class', 
    extend: {},
  },
  plugins: [ require('tailwindcss'),require('autoprefixer')],
}

