import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gallery: {
          50: '#faf8f5',
          100: '#f5f1eb',
          200: '#e8ddd1',
          300: '#d9c8b3',
          400: '#c7ad91',
          500: '#b8956f',
          600: '#a8855e',
          700: '#8b6f4e',
          800: '#715b44',
          900: '#5d4e37',
        },
        artist: {
          brown: '#5d4e37',
          'brown-light': '#8b7355',
          'brown-dark': '#4a3e2a',
          'blue-green': '#4a6741',
          'blue-green-light': '#6b7c5c',
          'blue-green-dark': '#3a5232',
          'warm-gray': '#6b5b51',
          'warm-gray-light': '#8a7a70',
          'warm-gray-dark': '#5a4d44',
          sage: '#9ca986',
          'sage-light': '#b8c4a4',
          'sage-dark': '#7a8969',
          earth: '#8b7355',
          'earth-light': '#a6907a',
          'earth-dark': '#6b5940',
          moss: '#6b7c5c',
          'moss-light': '#8a9b7b',
          'moss-dark': '#556349',
        },
        museum: {
          cream: '#faf8f5',
          'cream-dark': '#f0ede6',
          parchment: '#f4f1ea',
          'parchment-dark': '#e6e0d5',
          bronze: '#cd7f32',
          'bronze-light': '#e6a055',
          'bronze-dark': '#a66328',
          gold: '#d4af37',
          'gold-light': '#f0cc5a',
          'gold-dark': '#b8932e',
          'gold-muted': '#c4a142',
          shadow: 'rgba(93, 78, 55, 0.1)',
          'shadow-medium': 'rgba(93, 78, 55, 0.2)',
          'shadow-deep': 'rgba(93, 78, 55, 0.35)',
          'shadow-intense': 'rgba(93, 78, 55, 0.5)',
        }
      },
      fontFamily: {
        'crimson': ['var(--font-crimson)', 'serif'],
        'inter': ['var(--font-inter)', 'sans-serif'],
        'display': ['var(--font-crimson)', 'serif'],
        'body': ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1.1' }],
        '9xl': ['8rem', { lineHeight: '1.1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'fade-in-down': 'fadeInDown 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'slide-up-stagger': 'slideUpStagger 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'rotate-gentle': 'rotateGentle 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'floatDelayed 6s ease-in-out infinite',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-soft': 'pulseSoft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'entrance-hero': 'entranceHero 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'entrance-painting': 'entrancePainting 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(20px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
        fadeInUp: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(30px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
        fadeInDown: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(-30px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
        slideUp: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(40px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
        slideUpStagger: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(60px) scale(0.95)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0) scale(1)' 
          },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        rotateGentle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        float: {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)' 
          },
          '50%': { 
            transform: 'translateY(-10px) rotate(1deg)' 
          },
        },
        floatDelayed: {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)' 
          },
          '50%': { 
            transform: 'translateY(-15px) rotate(-1deg)' 
          },
        },
        scaleIn: {
          '0%': { 
            opacity: '0', 
            transform: 'scale(0.9)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'scale(1)' 
          },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        entranceHero: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(60px) scale(0.95)',
            filter: 'blur(5px)'
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0) scale(1)',
            filter: 'blur(0px)'
          },
        },
        entrancePainting: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(80px) rotateX(15deg) scale(0.9)',
            filter: 'blur(8px)'
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0) rotateX(0deg) scale(1)',
            filter: 'blur(0px)'
          },
        },
      },
      boxShadow: {
        'gallery': '0 8px 32px rgba(93, 78, 55, 0.12), 0 2px 8px rgba(93, 78, 55, 0.08)',
        'gallery-hover': '0 16px 48px rgba(93, 78, 55, 0.18), 0 4px 12px rgba(93, 78, 55, 0.12)',
        'painting': '0 20px 40px rgba(93, 78, 55, 0.15), 0 8px 16px rgba(93, 78, 55, 0.1)',
        'painting-hover': '0 32px 64px rgba(93, 78, 55, 0.25), 0 12px 24px rgba(93, 78, 55, 0.15)',
        'frame': 'inset 0 0 0 2px #d4af37, inset 0 0 0 6px #8b7355, inset 0 0 0 8px #6b5b51, 0 20px 40px rgba(93, 78, 55, 0.3)',
        'frame-hover': 'inset 0 0 0 2px #f0cc5a, inset 0 0 0 6px #a6907a, inset 0 0 0 8px #8a7a70, 0 32px 64px rgba(93, 78, 55, 0.4)',
        'frame-deep': 'inset 0 0 0 4px #d4af37, inset 0 0 0 8px #8b7355, inset 0 0 0 12px #6b5b51, inset 0 0 0 14px #5d4e37, 0 24px 48px rgba(93, 78, 55, 0.35)',
        'inner-frame': 'inset 0 2px 4px rgba(93, 78, 55, 0.15), inset 0 -2px 4px rgba(255, 255, 255, 0.1)',
        'inner-glow': 'inset 0 0 20px rgba(212, 175, 55, 0.1)',
        'glass': '0 8px 32px rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.2) inset',
        'glass-hover': '0 16px 48px rgba(255, 255, 255, 0.15), 0 1px 0 rgba(255, 255, 255, 0.3) inset',
        'depth-1': '0 1px 3px rgba(93, 78, 55, 0.12), 0 1px 2px rgba(93, 78, 55, 0.24)',
        'depth-2': '0 3px 6px rgba(93, 78, 55, 0.16), 0 3px 6px rgba(93, 78, 55, 0.23)',
        'depth-3': '0 10px 20px rgba(93, 78, 55, 0.19), 0 6px 6px rgba(93, 78, 55, 0.23)',
        'depth-4': '0 14px 28px rgba(93, 78, 55, 0.25), 0 10px 10px rgba(93, 78, 55, 0.22)',
        'depth-5': '0 19px 38px rgba(93, 78, 55, 0.30), 0 15px 12px rgba(93, 78, 55, 0.22)',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '40px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-museum': 'linear-gradient(135deg, #faf8f5 0%, #f4f1ea 25%, #e8ddd1 50%, #d9c8b3 75%, #c7ad91 100%)',
        'gradient-frame': 'linear-gradient(135deg, #d4af37 0%, #cd7f32 25%, #8b7355 50%, #6b5b51 75%, #5d4e37 100%)',
        'gradient-shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
        'paper-texture': 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23d4af37" fill-opacity="0.03"%3E%3Ccircle cx="7" cy="7" r="1"/%3E%3Ccircle cx="53" cy="53" r="1"/%3E%3Ccircle cx="13" cy="43" r="1"/%3E%3C/g%3E%3C/svg%3E")',
        'canvas-texture': 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="canvas" width="4" height="4" patternUnits="userSpaceOnUse"%3E%3Cpath d="M 0,4 l 4,0 0,-4 -4,0 z" fill="%23faf8f5"/%3E%3Cpath d="M 0,0 l 2,2 2,-2 2,2 -2,2 -2,-2 z" fill="%23f5f1eb" fill-opacity="0.4"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100" height="100" fill="url(%23canvas)"/%3E%3C/svg%3E")',
      },
      transitionTimingFunction: {
        'museum': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'gallery': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'painting': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      transitionDuration: {
        '350': '350ms',
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '900': '900ms',
        '1200': '1200ms',
      },
    },
  },
  plugins: [],
}

export default config