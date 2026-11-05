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
        lime: { DEFAULT: '#88E03F', light: '#A6F568', dark: '#68B324' },
        teal: { DEFAULT: '#00D2B4', light: '#2FE4CB', dark: '#00A890' },
        cyan: { DEFAULT: '#22D3EE', light: '#67E8F9', dark: '#0891B2' },
        emerald: { DEFAULT: '#10B981', light: '#34D399', dark: '#059669' },
        amber: { DEFAULT: '#F59E0B', light: '#FBBF24', dark: '#D97706' },
        rose: { DEFAULT: '#F43F5E', light: '#FB7185', dark: '#E11D48' },
        // Legacy color aliases mapped to fresh modern cyberpunk/obsidian palette
        indigo: { DEFAULT: '#88E03F', light: '#A6F568', dark: '#68B324' },
        purple: '#00D2B4',
        green: '#10B981',
        bg: { DEFAULT: '#07090E', 2: '#0D111A', 3: '#131826' },
        card: { DEFAULT: '#0B0F19', 2: '#101624' },
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
