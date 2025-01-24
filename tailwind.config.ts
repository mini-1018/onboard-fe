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
      animation: {
        shimmer: "shimmer 1.5s infinite linear",
        spin: "spin 3s linear infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "200%" },
          "100%": { backgroundPosition: "-200%" },
        },
      },
      backgroundImage: {
        "gradient-custom":
          "linear-gradient(to right, #D9D9D9 0%, #EDEEF1 50%, #D9D9D9 100%)",
      },
      backgroundSize: {
        custom: "300% 100%",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
} satisfies Config;
