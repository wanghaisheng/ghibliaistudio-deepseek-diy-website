module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brutal-black': '#000000',
        'brutal-white': '#FFFFFF',
        'brutal-red': '#FF0000',
        'brutal-blue': '#0000FF',
        'brutal-yellow': '#FFFF00',
        'brutal-pink': '#FF00FF',
        'brutal-green': '#00FF00',
        'brutal-orange': '#FF8000',
        'brutal-purple': '#8000FF',
        'bg-brutal': '#FFFFFF',
        'bg-brutal-alt': '#000000',
      },
      fontFamily: {
        sans: ['"Impact"', 'sans-serif'],
        mono: ['"Courier New"', 'monospace'],
        brutal: ['"Bebas Neue"', 'sans-serif'],
      },
      borderWidth: {
        'brutal': '4px',
        'brutal-lg': '6px',
        'brutal-xl': '8px',
      },
      boxShadow: {
        'brutal': '8px 8px 0px 0px rgba(0,0,0,1)',
        'brutal-sm': '4px 4px 0px 0px rgba(0,0,0,1)',
        'brutal-lg': '12px 12px 0px 0px rgba(0,0,0,1)',
        'brutal-inner': 'inset 4px 4px 0px 0px rgba(0,0,0,1)',
      },
      animation: {
        'brutal-pulse': 'brutalPulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'brutal-bounce': 'brutalBounce 0.5s infinite',
        'brutal-shake': 'brutalShake 0.5s cubic-bezier(.36,.07,.19,.97) both',
      },
      keyframes: {
        brutalPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
        },
        brutalBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        brutalShake: {
          '10%, 90%': { transform: 'translateX(-1px)' },
          '20%, 80%': { transform: 'translateX(2px)' },
          '30%, 50%, 70%': { transform: 'translateX(-4px)' },
          '40%, 60%': { transform: 'translateX(4px)' },
        }
      }
    },
  },
  plugins: [],
}
