
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        // OKMD Brand Colors from Blueprint
        primary: {
          DEFAULT: '#17A2B8',  // Main cyan/turquoise
          light: '#5CD5E8',
          dark: '#0D7A8A',
        },
        secondary: {
          DEFAULT: '#00BCD4',  // Light cyan
          light: '#62EFFF',
          dark: '#008BA3',
        },
        accent: {
          cyan: '#00E5FF',
          blue: '#2196F3',
        },
        background: {
          light: '#E0F7FA',
          lighter: '#B2EBF2',
          white: '#FFFFFF',
        },
        dark: {
          DEFAULT: '#1A1A1A',
          light: '#2C2C2C',
          lighter: '#3E3E3E',
        },
      },
      fontFamily: {
        sans: ['IBM Plex Sans Thai', 'Noto Sans Thai', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        slideUp: 'slideUp 1.2s ease-in-out',
      },
    }
  },
  
  plugins: [],
};

export default config;
