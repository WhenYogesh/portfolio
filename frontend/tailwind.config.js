// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem', // Adds left/right padding on all screens
    },
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
      },
      colors: {
        yellow: {
          400: '#FDC435',
          500: '#FDBD20',
        },
        gray: {
          100: '#F6F6F6',
          500: '#6D6D6D',
          900: '#1A1A1A',
        }
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
