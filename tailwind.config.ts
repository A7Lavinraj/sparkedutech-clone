import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light100: "#FFFFFF",
        light200: "#FDFAF6",
        light300: "#E4EFE7",
        light400: "#064420",
      },
    },
  },
  plugins: [],
};
export default config;
