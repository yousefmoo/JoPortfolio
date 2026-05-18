/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        indigo: { DEFAULT: '#6366F1', light: '#818CF8', dark: '#4338CA' },
        cyan: '#22D3EE',
        purple: '#A855F7',
        green: '#10B981',
        amber: '#F59E0B',
        bg: { DEFAULT: '#07070F', 2: '#0D0D1A', 3: '#121228' },
        card: { DEFAULT: '#0F0F23', 2: '#13132A' },
      },
      animation: {
        'pulse-slow': 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite',
        'grad-shift': 'gradshift 4s linear infinite',
        'scroll-down': 'scrolldown 2s ease infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        gradshift: { '0%': { backgroundPosition: '0%' }, '100%': { backgroundPosition: '200%' } },
        scrolldown: {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top' },
          '50%': { transform: 'scaleY(1)', transformOrigin: 'top' },
          '51%': { transform: 'scaleY(1)', transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
