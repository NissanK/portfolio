/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  variants: {
    extend: {
      translate: ['responsive'], // Enable responsive variants for the translate utility
    },
  },
  theme: {
    extend: {
      colors :{
        'navbar-blue' : '#1B262C',
        'lightest-slate' : '#bad8e6',
        'light-slate' : '#a6d7f8',
        'blue-slate' : '#3c9fe1',
        'dark-slate' : '#83b3c9',
        'navbar-dark-green' : '#233f4f',
        'global-bg' : '#0a192f',
        'light-global-bg' : '#112240',
        'lightest-global-bg' : '#233554',
        'highlight' : '#7cfcdf',
        'error' : '#ff3333',
        'bright-blue' : '#0096FF'
      },
      fontFamily: {
        sans: ['var(--font-ubuntu)'],
      }
    },
  },
  plugins: [],
}
