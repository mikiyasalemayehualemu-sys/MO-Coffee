/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#FDF8F5',
          100: '#F5E6D3', // Warmer Cream
          200: '#E6CCB2',
          300: '#DDB892',
          400: '#B08968',
          500: '#9C6644', // Rich Brown
          600: '#7F5539',
          700: '#582F0E', // Darker Roast
          800: '#331A05', // Espresso Black-Brown
          900: '#1A0D02',
          950: '#0C0601', // Midnight Roast
        },
        accent: {
          light: '#F5F5DC',
          DEFAULT: '#BC6C25', // Richer Tan/Gold
          dark: '#8B4513',
        },
        cream: {
          light: '#FFFDF9',
          DEFAULT: '#FDF8F5',
          dark: '#EDE0D4',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        vibe: ['"Crimson Pro"', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'smoke': 'smoke 4s ease-in-out infinite',
        'steam-1': 'steam 3s ease-in-out infinite',
        'steam-2': 'steam 3s ease-in-out infinite 0.5s',
        'steam-3': 'steam 3s ease-in-out infinite 1s',
        'pour': 'pour 2s ease-in-out infinite',
        'fill': 'fill 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(1deg)' },
        },
        smoke: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0' },
          '50%': { transform: 'translateY(-20px) scale(1.2)', opacity: '0.4' },
          '100%': { transform: 'translateY(-40px) scale(1.5)', opacity: '0' },
        },
        steam: {
          '0%': { transform: 'translateY(0) scale(0.8) translateX(0)', opacity: '0' },
          '30%': { opacity: '0.6' },
          '100%': { transform: 'translateY(-50px) scale(1.5) translateX(10px)', opacity: '0' },
        },
        pour: {
          '0%': { height: '0%', top: '0%' },
          '50%': { height: '100%', top: '0%' },
          '100%': { height: '0%', top: '100%' },
        },
        fill: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0%)' },
        }
      },
      backgroundImage: {
        'grain': "url('https://www.transparenttextures.com/patterns/asfalt-light.png')",
      }
    },
  },
  plugins: [],
}
