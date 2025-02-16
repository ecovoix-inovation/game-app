/** @type {import('tailwindcss').Config} */
module.exports = {
  assets:["./assets/fonts"],
  content: ['./src/**/*.{js,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        sans:['Display-Regular', 'sans-serif'],
        bold:['Display-Bold','sans-serif'],
        semibold:['Display-SemiBold','sans-serif'],
      },
      colors: {
        primary: "#56a77e",  
        text: "#fff2e6",
        secondary: "#1f8046",
        background: "#003000",
        eco_pink: "#e88ce8",
        eco_blue: "#64a9ed" 
      }
    },
  },
  plugins: [],
};
