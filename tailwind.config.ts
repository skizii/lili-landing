import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'net-pattern': 'url("../img/bg-pattern.svg")',
        'left-pattern': 'url("../img/left-pattern.svg")',
        'right-pattern': 'url("../img/right-pattern.svg")'
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta-sans)']
      },
      colors: {
        main: '#282C32',
        white: '#FFFFFF',
        secondary: '#A9B0BA',
        tags: '#F6F7F7',
        accent: '#F9BF42',
      }
    },
  },
  plugins: [],
};
export default config;
