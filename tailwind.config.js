/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#fafafa',
          base: '#737373',
          dark: '#0a0a0a'
        },
        secondary: {
          light: '#c084fc',
          base: '#7e22ce',
          dark: '#3b0764'
        }
      }
    },
  },
  plugins: [],
}

