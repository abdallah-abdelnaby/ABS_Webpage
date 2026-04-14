import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          950: "#09111f",
          900: "#0f1828",
          800: "#172338",
          700: "#23324a",
        },
        steel: {
          50: "#f6f7f9",
          100: "#edf1f5",
          200: "#d7dee7",
          300: "#b4c0cf",
          400: "#6d7b8d",
          500: "#566476",
          700: "#253449",
          900: "#111b2b",
        },
        accent: {
          300: "#7ea8ff",
          400: "#4d86ff",
          500: "#2f6fed",
          600: "#2458c7",
        },
      },
      boxShadow: {
        panel: "0 24px 80px -40px rgba(15, 23, 42, 0.22)",
        panelStrong: "0 32px 100px -46px rgba(2, 8, 23, 0.52)",
      },
      backgroundImage: {
        "grid-dark":
          "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "grid-light":
          "linear-gradient(to right, rgba(17,27,43,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,27,43,0.06) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
