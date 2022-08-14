/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
      md: { max: '769px' },
      // => @media (max-width: 769px) { ... },
      // actually '768px'
      sm: { max: '640px' },
      // => @media (max-width: 640px) { ... },
      // actually '640px'
    },
  },
  plugins: [],
};
