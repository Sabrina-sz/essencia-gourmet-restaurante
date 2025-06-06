/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "home":"url('/img/Essência-Gourmet2.png')"
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        burlywood: '#DEB887', 
      },
    },
  },
  plugins: [],
}