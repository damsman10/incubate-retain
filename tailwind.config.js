/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepBlue: '#001B3E',
      },

      fontFamily: {
          clash: ['Clash Display', 'sans-serif'],
          nexa: ['Nexa', 'sans-serif'],
          spaceGrotesk: ['Space Grotesk', 'sans-serif'],
          inter: ['Inter', 'sans-serif'],
          raleway: ['Raleway', 'sans-serif']
      },
    },
  },
  plugins: [],
}