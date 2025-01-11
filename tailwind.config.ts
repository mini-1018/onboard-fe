import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#020715",
        white: "#ffffff",
        gray: "#f5f5f5",
        red: "#ff0000",
        secondary: "#000000",
        accent: "#000000",
      },
    },
  },
  plugins: [],
} satisfies Config;
