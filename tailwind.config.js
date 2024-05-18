/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
  ],
  theme: {
    extend: {
      keyframes: {
        'anime-2': {
          '0%': { transform: 'rotate(5deg)', backgroundColor: 'red' },
          '50%': { transform: 'rotate(-5deg)', backgroundColor: 'green' },
          '100%': { transform: 'rotate(0)', backgroundColor: 'yellow' },
        },
      },
      animation: {
        'anime-2': 'anime-2 1.5s infinite alternate-reverse forwards ease-in-out',
      },
    },
  },
  plugins: [],
}

