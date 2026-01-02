/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#10101A',
          800: '#1a1a2e',
          700: '#242438',
          600: '#2d2d44',
        },
        blue: {
          400: '#4d85ff',
          500: '#2667FF',
          600: '#1a4fd6',
          700: '#0d3ba8',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(38, 103, 255, 0.3)',
        'glow-md': '0 0 20px rgba(38, 103, 255, 0.4)',
        'glow-lg': '0 0 30px rgba(38, 103, 255, 0.5)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
