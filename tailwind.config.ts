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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
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
