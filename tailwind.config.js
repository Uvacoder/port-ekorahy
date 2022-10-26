/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
      colors: {
        primary: '#a21caf',
        secondary: '#6b7280',
        dark: '#334155',
      },
      fontFamily: {
        Quicksand: ['Quicksand', 'sans-serif'],
        Kanit: ['Kanit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
