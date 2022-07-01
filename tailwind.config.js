/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      base: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'light-blue': {
          100: 'rgba(62, 134, 245, 1)',
          80: 'rgba(62, 134, 245, 0.8)',
          20: 'rgba(62, 134, 245, 0.25)'
        },
        'pearl-blue': '#F2F6FF'
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem'
      }
    },
  },
  plugins: [],
}
