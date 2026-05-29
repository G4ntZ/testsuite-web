/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'monospace',
        ],
      },
      colors: {
        brand: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#4F6EF7',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
          950: '#172554',
        },
        app: {
          bg: 'rgb(var(--app-bg-rgb) / <alpha-value>)',
          text: 'rgb(var(--app-text-rgb) / <alpha-value>)',
          glass: 'var(--app-glass-bg)',
          'glass-border': 'var(--app-glass-border)',
          header: 'var(--app-header-bg)',
        },
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgb(var(--app-text-rgb) / 0.08), transparent)',
        'hero-glow-2': 'radial-gradient(ellipse 60% 50% at 50% 80%, rgb(var(--app-text-rgb) / 0.05), transparent)',
        'card-glow': 'radial-gradient(ellipse at 50% 0%, rgb(var(--app-text-rgb) / 0.04), transparent 70%)',
        'hero-overlay': 'var(--app-hero-overlay)',
      },
      boxShadow: {
        glow: '0 0 40px -12px rgba(37, 99, 235, 0.3)',
        'glow-lg': '0 0 80px -20px rgba(37, 99, 235, 0.25)',
        card: '0 1px 2px rgba(0, 0, 0, 0.15), 0 0 0 1px rgb(var(--app-text-rgb) / 0.06)',
        'card-hover': '0 4px 16px rgba(0, 0, 0, 0.08), 0 0 0 1px rgb(var(--app-text-rgb) / 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.4s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      backgroundSize: {
        'grid-sm': '40px 40px',
        'grid-lg': '64px 64px',
      },
    },
  },
  plugins: [],
}
