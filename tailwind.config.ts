import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-heading)'],
        body: ['var(--font-body)'],
      },
      colors: {
        border: 'hsl(210, 36%, 96%)',
        input: 'hsl(210, 36%, 96%)',
        ring: 'hsl(216.9, 100%, 61.4%)',
        background: 'hsl(210, 36%, 96%)',
        foreground: 'hsl(210, 36%, 10%)',
        primary: {
          50: 'hsl(216.9, 100%, 97%)',
          100: 'hsl(216.9, 100%, 91%)',
          200: 'hsl(216.9, 100%, 85%)',
          300: 'hsl(216.9, 100%, 77%)',
          400: 'hsl(216.9, 100%, 69%)',
          500: 'hsl(216.9, 100%, 61.4%)',
          600: 'hsl(216.9, 100%, 55%)',
          700: 'hsl(216.9, 100%, 49%)',
          800: 'hsl(216.9, 100%, 43%)',
          900: 'hsl(216.9, 100%, 37%)',
          DEFAULT: 'hsl(216.9, 100%, 61.4%)',
          foreground: 'hsl(210, 16.7%, 97.6%)',
        },
        secondary: {
          50: 'hsl(122.4, 39.4%, 95%)',
          100: 'hsl(122.4, 39.4%, 90%)',
          200: 'hsl(122.4, 39.4%, 80%)',
          300: 'hsl(122.4, 39.4%, 70%)',
          400: 'hsl(122.4, 39.4%, 60%)',
          500: 'hsl(122.4, 39.4%, 49.2%)',
          600: 'hsl(122.4, 39.4%, 40%)',
          700: 'hsl(122.4, 39.4%, 30%)',
          800: 'hsl(122.4, 39.4%, 20%)',
          900: 'hsl(122.4, 39.4%, 10%)',
          DEFAULT: 'hsl(122.4, 39.4%, 49.2%)',
          foreground: 'hsl(0, 0%, 100%)',
        },
        accent: {
          50: 'hsl(0, 100%, 97%)',
          100: 'hsl(0, 100%, 94%)',
          200: 'hsl(0, 100%, 89%)',
          300: 'hsl(0, 100%, 84%)',
          400: 'hsl(0, 100%, 77%)',
          500: 'hsl(0, 100%, 71%)',
          600: 'hsl(0, 100%, 64%)',
          700: 'hsl(0, 100%, 57%)',
          800: 'hsl(0, 100%, 50%)',
          900: 'hsl(0, 100%, 43%)',
          DEFAULT: 'hsl(0, 100%, 71%)',
          foreground: 'hsl(0, 0%, 100%)',
        },
        destructive: {
          DEFAULT: 'hsl(0, 72%, 50%)',
          foreground: 'hsl(0, 0%, 100%)',
        },
        muted: {
          DEFAULT: 'hsl(210, 36%, 86%)',
          foreground: 'hsl(210, 36%, 26%)',
        },
        popover: {
          DEFAULT: 'hsl(210, 36%, 98%)',
          foreground: 'hsl(210, 36%, 10%)',
        },
        card: {
          DEFAULT: 'hsl(0, 0%, 100%)',
          foreground: 'hsl(210, 36%, 10%)',
        },
      },
      borderRadius: {
        xl: `calc(var(--radius) + 4px)`,
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: `calc(var(--radius) - 4px)`,
      },
      keyframes: {
        'accordion-down': {
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [nextui(), require('tailwindcss-animate')],
}

export default config
