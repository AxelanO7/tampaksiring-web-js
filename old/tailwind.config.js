/** @type {import('tailwindcss').Config} */
const { heroui } = require('@heroui/theme');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#556B2F',
        secondary: '#FFD700',
        dark: '#2C3E50',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [heroui()],
};
