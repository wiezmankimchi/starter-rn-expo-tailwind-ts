const nativewind = require( "nativewind/tailwind/css" )
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./App.{js,jsx,ts,tsx}",
    "./src/utils/**/*.{js,jsx,ts,tsx}",
    "./src/styles/**/*.{js,jsx,ts,tsx}",
    "./src/services/**/*.{js,jsx,ts,tsx}",
    "./src/screens/**/*.{js,jsx,ts,tsx}",
    "./src/lib/**/*.{js,jsx,ts,tsx}",
    "./src/common/**/*.{js,jsx,ts,tsx}",
    "./src/common/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#600EE6",
        'secondary': "#414757",
        'error': "#F13A59",
        'mce-warm-gray': "#A49592",
        'mce-dark-bluish-grey': '#727077',
        'mce-beige': '#EED8C9',
        'mce-mauve': '#E99787',

      }
    },
  },
  plugins: [ nativewind ],
}
