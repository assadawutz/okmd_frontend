
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {extend: {
  keyframes: {
    fadeIn: {
      '0%': { opacity: 0, transform: 'translateY(20px)' },
      '100%': { opacity: 1, transform: 'translateY(0)' },
    },
    slideUp: {
      '0%': { opacity: 0, transform: 'translateY(40px)' },
      '100%': { opacity: 1, transform: 'translateY(0)' },
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
