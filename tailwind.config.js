/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      md: "905px",
      lg: "1440px",
      custom: "500px"
    },
    extend: {
      colors: {
          darkCyan: "hsl(180, 29%, 50%)",
          //### Neutral
          lightGrayishCyan1: "hsl(180, 52%, 96%)",
          lightGrayishCyan2: "hsl(180, 31%, 95%)",
          darkGrayishCyan: "hsl(180, 8%, 52%)",
          veryDarkGrayishCyan: "hsl(180, 14%, 20%)",
      },
      fontFamily: {
        sans: ['League Spartan', 'sans-serif']
      },
      fontWeight: {
        normal: '500',
        bold: 700
      }
    },
  },
  plugins: [],
  darkMode: "class",
}

