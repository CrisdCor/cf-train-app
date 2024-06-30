import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "color-black": {
          "10":"#030303",
          "20":"#111111",
          "30":"#1a1a1a",
        },
        "color-gray":{
          "10":"#a1a1a1",
          "20":"#ededed",
          "30":"rgba(237, 237, 237, 0.1)",
        },
        "color-white":"#ffffff",
        "color-contrast":"#0070f3",
      }
    },
  },
  plugins: [],
};
export default config;
