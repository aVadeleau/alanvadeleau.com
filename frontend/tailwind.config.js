/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-midnight': '#121F28',
        'secondary-orange': '#FF715B',
        'off-white': '#FEFEFC',
        'gray-stack' : '#353F48',
        'dark-gray-stack-bd' : '#1F2D36',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],

      }
    },
  },
  plugins: [],
}