/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        // 'favicon-dark-blue' : '#1966cd',
        // 'favicon-purple' : '#7c6eb4',
        // 'favicon-blue' : '#3e9def',
        'navbar-blue' : '#1B262C',
        'lightest-slate' : '#bad8e6',
        'light-slate' : '#a6d7f8',
        'blue-slate' : '#3c9fe1',
        'dark-slate' : '#83b3c9',
        'navbar-dark-green' : '#233f4f',
        'global-bg' : '#0a3c5e',
        'light-global-bg' : '#12659c',
        'highlight' : '#7cfcdf',
        'error' : '#ff3333',
        'bright-blue' : '#0096FF'
      },
      fontFamily: {
        sans: ['var(--font-ubuntu)'],
      },
    },
  },
  plugins: [],
}
