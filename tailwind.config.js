/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      colors: {
        dark: '#0a0a0a',
        card: '#111111',
        card2: '#161616',
        lime: {
          400: '#a3e635',
          700: '#4d7c0f',
        },
        yellow: {
          300: '#fde047',
        }
      }
    },
  },
  plugins: [],
}