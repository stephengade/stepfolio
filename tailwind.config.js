/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  },
  theme: {
    screens: {
      sm: "400px",
      md: "976px",
      xl: "1440px",
      ds: "1920px",
      dm: "2480px",
      dl: "2700px",
    },
    fontFamily: {
      jos: ["Josefin Sans", "sans-serif"],
      syne: ["Syne", "sans-serif"],
    },
    extend: {
      colors: {
        myDark: "#0E1012",
        myWhite: "#CBC9E2",  
      }
    },
  },
  plugins: [],
}
