/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '375px',
        'desktop': '1440px',
      },
      colors: {
        clifford: '#da373d',
        'light-gray': 'hsl(212, 45%, 89%)',
        'grayish-blue': 'hsl(220, 15%, 55%)',
        'dark-blue': 'hsl(218, 44%, 22%)',
      },
      fontSize: {
        '2xl': '1.375rem'
      },
      width: {
        81: '18rem'
      },
    },
  },
  plugins: [],
}
