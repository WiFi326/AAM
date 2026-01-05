/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
    "./src/**/*.{html,js}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary Colors - Emerald Authority
        primary: {
          DEFAULT: '#047857', // emerald-700
          50: '#ECFDF5', // emerald-50
          100: '#D1FAE5', // emerald-100
          200: '#A7F3D0', // emerald-200
          300: '#6EE7B7', // emerald-300
          400: '#34D399', // emerald-400
          500: '#10B981', // emerald-500
          600: '#059669', // emerald-600
          700: '#047857', // emerald-700
          800: '#065F46', // emerald-800
          900: '#064E3B', // emerald-900
        },
        // Secondary Colors - Depth and Stability
        secondary: {
          DEFAULT: '#065F46', // emerald-800
          50: '#ECFDF5', // emerald-50
          100: '#D1FAE5', // emerald-100
          200: '#A7F3D0', // emerald-200
          300: '#6EE7B7', // emerald-300
          400: '#34D399', // emerald-400
          500: '#10B981', // emerald-500
          600: '#059669', // emerald-600
          700: '#047857', // emerald-700
          800: '#065F46', // emerald-800
          900: '#064E3B', // emerald-900
        },
        // Accent Colors
        accent: {
          DEFAULT: '#10B981', // emerald-500
          light: '#34D399', // emerald-400
          dark: '#059669', // emerald-600
        },
        // Background Colors
        background: '#F9FAFB', // gray-50
        surface: {
          DEFAULT: '#FFFFFF', // white
          hover: '#F3F4F6', // gray-100
        },
        // Text Colors
        text: {
          primary: '#111827', // gray-900
          secondary: '#6B7280', // gray-500
          tertiary: '#9CA3AF', // gray-400
          inverse: '#FFFFFF', // white
        },
        // Status Colors
        success: {
          DEFAULT: '#059669', // emerald-600
          light: '#D1FAE5', // emerald-100
          dark: '#047857', // emerald-700
        },
        warning: {
          DEFAULT: '#D97706', // amber-600
          light: '#FEF3C7', // amber-100
          dark: '#B45309', // amber-700
        },
        error: {
          DEFAULT: '#DC2626', // red-600
          light: '#FEE2E2', // red-100
          dark: '#B91C1C', // red-700
        },
        info: {
          DEFAULT: '#2563EB', // blue-600
          light: '#DBEAFE', // blue-100
          dark: '#1E40AF', // blue-700
        },
        // Border Colors
        border: {
          DEFAULT: '#E5E7EB', // gray-200
          light: '#F3F4F6', // gray-100
          dark: '#D1D5DB', // gray-300
          focus: '#10B981', // emerald-500
        },
      },
      fontFamily: {
        heading: ['Lexend', 'sans-serif'],
        body: ['Source Sans 3', 'sans-serif'],
        caption: ['IBM Plex Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.4' }], // 12px
        sm: ['0.875rem', { lineHeight: '1.4' }], // 14px
        base: ['1rem', { lineHeight: '1.6' }], // 16px
        lg: ['1.125rem', { lineHeight: '1.5' }], // 18px
        xl: ['1.25rem', { lineHeight: '1.4' }], // 20px
        '2xl': ['1.5rem', { lineHeight: '1.3' }], // 24px
        '3xl': ['1.875rem', { lineHeight: '1.25' }], // 30px
        '4xl': ['2.25rem', { lineHeight: '1.2' }], // 36px
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        base: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '96px',
      },
      borderRadius: {
        sm: '6px',
        base: '12px',
        lg: '16px',
        xl: '24px',
        full: '9999px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.08)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.16)',
      },
      transitionDuration: {
        fast: '150ms',
        DEFAULT: '250ms',
        slow: '350ms',
      },
      transitionTimingFunction: {
        'out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      zIndex: {
        base: '0',
        card: '1',
        dropdown: '50',
        navigation: '100',
        modal: '200',
        notification: '300',
      },
      maxWidth: {
        'prose': '70ch',
      },
      minHeight: {
        'touch': '44px',
      },
      minWidth: {
        'touch': '44px',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-from-top': {
          '0%': { transform: 'translateY(-8px)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-in-from-bottom': {
          '0%': { transform: 'translateY(8px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        shimmer: 'shimmer 2s infinite',
        'fade-in': 'fade-in 250ms ease-out',
        'slide-in-from-top': 'slide-in-from-top 250ms ease-out',
        'slide-in-from-bottom': 'slide-in-from-bottom 250ms ease-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}