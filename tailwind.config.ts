import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#003559",
        white: "#ffffff",
        gray: "#f5f5f5",
        red: "#ff0000",
        pink: "#DA5380",
        yellow: "#FFCB00",
        "yellow-hover": "#FFFF8F",
        "primary-hover": "#007CCE",
        secondary: "#000000",
        accent: "#000000",
      },
      fontFamily: {
        prompt: ["Prompt", "sans-serif"],
        noto: ["Noto Sans KR", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
} satisfies Config;
