/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        sans: ['Permanent Marker']
      },
    backgroundImage:{
      'img':"url('/public/bg.png')"
    }
    },
  },
  plugins: [],
}