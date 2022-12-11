/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#e45f20'
      },
      backgroundImage: {
        'ghn': "url('https://theme.hstatic.net/200000472237/1000829412/14/mega-icon-sv-l1.png?v=487')",
        'ahamove': "url('//theme.hstatic.net/200000472237/1000829412/14/mega-icon-sv-l3.png?v=487')"
      }
    },
    screens: {
      
      'mobile': '360px',

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],

}
