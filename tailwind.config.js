/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'bottom': '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
        'inner-custom': 'inset 0 4px 6px rgba(214, 227, 255, 1)',
        'inner-custom2': '0px 4px 5px rgba(72, 132, 223, 0.7)',
      },
      
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