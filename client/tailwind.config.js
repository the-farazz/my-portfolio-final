import plugin from 'tailwindcss/plugin'
import tailwindAnimate from 'tailwindcss-animate'
import tailwindTypography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(210, 8%, 12%)",
        foreground: "hsl(0, 0%, 100%)",
        card: {
          DEFAULT: "hsl(210, 8%, 16%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        popover: {
          DEFAULT: "hsl(210, 8%, 12%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        primary: {
          DEFAULT: "hsl(45, 93%, 47%)",
          foreground: "hsl(210, 8%, 12%)",
        },
        secondary: {
          DEFAULT: "hsl(210, 8%, 16%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        muted: {
          DEFAULT: "hsl(210, 8%, 16%)",
          foreground: "hsl(215, 20.2%, 65.1%)",
        },
        accent: {
          DEFAULT: "hsl(210, 8%, 16%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        destructive: {
          DEFAULT: "hsl(0, 62.8%, 30.6%)",
          foreground: "hsl(0, 0%, 98%)",
        },
        border: "hsl(215, 27.9%, 16.9%)",
        input: "hsl(215, 27.9%, 16.9%)",
        ring: "hsl(45, 93%, 47%)",
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
    },
  },
  plugins: [
    tailwindAnimate,
    tailwindTypography,
    plugin(function({ addVariant }) {
      // Standard light mode variant that matches when any ancestor has the 'light' class
      addVariant('light', '.light &')
    })
  ],
};
