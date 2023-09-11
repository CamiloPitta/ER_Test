/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: '320px',
      tablet: '640px',
      laptop: '1024px'
    },
    extend: {
      keyframes: {
        "fade": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        }
      },
      animation: {
        "fade": "fade 0.5s ease-in"
      },
      colors: {
        // primary: {
        //   light: '#fafafa',
        //   base: '#737373',
        //   dark: '#0a0a0a'
        // },
        // secondary: {
        //   light: '#c084fc',
        //   base: '#f1f5f9',
        //   dark: '#3b0764'
        // }
        primary: {
          light: '#f8fafc',
          base: '#94a3b8',
          dark: '#334155'
        },
        secondary: {
          light: '#ecfdf5',
          base: '#10b981',
          dark: '#047857'
        }
      }
    },
    fontFamily: {
      custom: ['Montserrat', 'sans'],
    }
  },
  plugins: [],
}

