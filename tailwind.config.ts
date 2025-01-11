import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["proxima-nova", "sans-serif"],
      },
      textColor: {
        primary: "var(--color-font-primary)",
        secondary: "var(--color-font-secondary)",
        tertiary: "var(--color-font-tertiary)",
      },
      backgroundColor: {
        neutral: "var(--color-bg-neutral)",
      },
      borderRadius: {
        primary: "var(--radius-primary)",
      },
      backgroundImage: {
        "hero-background": "url('/hero-banner.webp')",
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
        "2xl": "1920px",
        "3xl": "2560px",
      },
    },
  },
  plugins: [],
} satisfies Config;
