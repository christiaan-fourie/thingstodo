/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['"Poppins"', 'sans-serif'],
      },
      colors: {
        'palette-prim': 'hsl(184, 100%, 53%)',
      },
    },
  },
  variants: {},
  plugins: [],
}
