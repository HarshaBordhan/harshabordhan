/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './posts/**/*.mdx'
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
  plugins: [require('@tailwindcss/typography')],
};
