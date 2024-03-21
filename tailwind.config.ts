import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Inter var", sans-serif'],
    },
    extend: {
      screens: {
        fold: "300px",
        ssm: "470px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          paper: "#FFFFFF",
          main: "#53389E",
          button: "#7F56D9",
          50: "#F9F5FF",
          200: "#E9D7FE",
          700: "#6941C6",
          900: "#101828",
        },
        secondary: {
          main: "#F9FAFB",
          border: "#D0D5DD",
          divider: "#EAECF0",
        },
        tertiary: {
          main: "#475467",
          inverse: "#344054",
        },
      },
    },
  },
  plugins: [],
};
export default config;
