/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gradientColor1: '#ff4b63',
        gradientColor2: '#6b33fe', 
        gradientColor3: '#6b33fe', 
        gradientColor4: '#23ce94', 
      },
    },
  },
  plugins: [ require('tailwindcss'),require('autoprefixer'), require("daisyui")],
}

