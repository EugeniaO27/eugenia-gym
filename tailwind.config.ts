import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
      },
      colors: {
        "primary-500": "#F13C7B",
        "primary-400": "#FFFFFF",
        "primary-300": "#000000",
        "primary-200": "#555555",
        "accent-500": "#FDBA74",
        "accent-400": "#F6BC7D",
        "accent-300": "#FB923C",
      }, 
      backgroundImage: {
        hero: "url(/anastase-maragos-7kEpUPB8vNk-unsplash.jpg)"
      },
    },  
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    } 
  },
  plugins: [],
};
export default config;
