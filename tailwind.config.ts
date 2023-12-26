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
        light100: "#F3EEEA",
        light200: "#EBE3D5",
        light300: "#B0A695",
        light400: "#776B5D",
      },
    },
  },
  plugins: [],
};
export default config;
