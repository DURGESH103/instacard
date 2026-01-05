/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-up-slow': 'floatUp 4s ease-in-out infinite',
        'float-up-medium': 'floatUp 3s ease-in-out infinite',
        'float-up-fast': 'floatUp 2s ease-in-out infinite',
      },
      keyframes: {
        floatUp: {
          '0%, 100%': { transform: 'translateY(0px)', opacity: '0.3' },
          '50%': { transform: 'translateY(-10px)', opacity: '0.7' },
        }
      },
      animationDelay: {
        '0': '0ms',
        '500': '500ms',
        '1000': '1000ms',
      },
      backdropBlur: {
        '2xl': '40px',
      }
    },
  },
  plugins: [],
}