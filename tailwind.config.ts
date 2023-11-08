import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-brown": "linear-gradient(45deg, #5a4230, #c09473)",
        "gradient-black":
          "linear-gradient(0deg, rgba(34,193,195,0) 0%, rgba(0,0,0,0.4) 60%)",
      },
      colors: {
        text: {
          DEFAULT: "#f2f5f8",
          50: "#eef2f6",
          100: "#dee6ed",
          200: "#bdccdb",
        },
        background: {
          DEFAULT: "#10181e",
          800: "#243542",
          900: "#121b21",
          950: "#090d11",
        },
        primary: "#78583f",
        secondary: "#1a2932",
        accent: "#b08869",
      },
    },
  },
  plugins: [],
};
export default config
