import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#020617", // Matte Black (slate-950/custom)
          blue: "#0f172a",  // Deep Blue (slate-900)
          grey: "#94a3b8",  // Metallic Grey (slate-400)
          white: "#f8fafc", // Off-white
          accent: "#3b82f6", // Bright blue accent for interactions
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
