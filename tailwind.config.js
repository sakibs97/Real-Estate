/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        'suse': ['SUSE', 'sans-serif']
      },
      backgroundImage: {
        banbg: "URL(./src/assets/banner/Luxury.jpg)",
        ban2bg: "URL(./src/assets/banner/Luxury2.jpg)",
        ban3bg: "URL(./src/assets/banner/Luxury3.jpg)",
        ban4bg: "URL(./src/assets/banner/Luxury4.jpg)",
        ban5bg: "URL(./src/assets/banner/Luxury5.jpg)",
      },
      animation: {
        fadeOut: 'fadeOut 6s ease-out forwards',
        fadeIn: 'fadeIn 1s ease-in',
      },
      keyframes: {
        fadeOut: {
          '0%': { opacity: '1'},
          '100%': { opacity: '0'},
        },
        fadeIn: {
          '0%': { opacity: '0'},
          '100%': { opacity: '1'},
        },
      },
    },
  },
  plugins: [
  ],
}