/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './partials/**/*', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: '#009FE2',
        green: '#AFCB1F',
        yellow: '#FFCB00',
        orange: '#ED7F1A',
        pink: '#E40980',
        background: '#121212',
        lightGrey: '#CECECE',
        medGrey: '#6E6E6E',
        darkGrey: '#3E3E3E',
        lightBlack: '#1A1A1A',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
