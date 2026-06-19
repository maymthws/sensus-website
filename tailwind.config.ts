import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light / airy base
        sensus: {
          50: "#ffffff",
          100: "#fafbfd",
          200: "#f4f6fb",
          300: "#eef2f8",
          400: "#e6e9f0",
          500: "#d4d9e3",
          // ink (text)
          ink: {
            900: "#0b0d12",
            700: "#1f242e",
            500: "#5b6373",
            400: "#8089a0",
            300: "#aab2c2",
          },
          // chrome / silver
          chrome: {
            1: "#ffffff",
            2: "#e9eef6",
            3: "#c8d3e3",
            4: "#8a98b0",
            5: "#5a6878",
          },
        },
        // Soft aurora accents
        aurora: {
          1: "#d8e3f3", // soft blue
          2: "#c5d5ee",
          3: "#e8d8f3", // soft lavender
          4: "#d3e9e4", // mint hint
        },
      },
      fontFamily: {
        display: [
          "var(--font-display)",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        body: [
          "var(--font-body)",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "aurora-soft":
          "radial-gradient(ellipse 1200px 800px at 20% -10%, rgba(216,227,243,0.55), transparent 60%), radial-gradient(ellipse 1000px 700px at 80% 20%, rgba(232,216,243,0.35), transparent 60%), radial-gradient(ellipse 900px 600px at 50% 100%, rgba(211,233,228,0.35), transparent 60%), linear-gradient(180deg, #ffffff 0%, #fafbfd 100%)",
        "chrome-pill":
          "linear-gradient(180deg, #ffffff 0%, #f1f4fa 50%, #e0e7f2 100%)",
        "chrome-light":
          "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(232,238,248,0.7) 30%, rgba(216,227,243,0.6) 60%, rgba(232,216,243,0.5) 100%)",
        "dark-pill":
          "linear-gradient(180deg, #1a1f2c 0%, #0b0d12 100%)",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(20,28,50,0.04), 0 1px 1px rgba(20,28,50,0.03)",
        "md": "0 4px 14px rgba(20,28,50,0.06), 0 1px 3px rgba(20,28,50,0.04)",
        "lg": "0 12px 40px rgba(20,28,50,0.08), 0 2px 6px rgba(20,28,50,0.04)",
        "xl":
          "0 30px 80px -20px rgba(20,28,50,0.18), 0 8px 20px -8px rgba(20,28,50,0.08)",
        "inset-glass":
          "inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -1px 0 rgba(180,195,220,0.2)",
      },
      borderRadius: {
        sm: "10px",
        md: "16px",
        lg: "24px",
        xl: "32px",
      },
      animation: {
        marquee: "marquee 36s linear infinite",
        float: "float 12s ease-in-out infinite",
        "float-rev": "float 14s ease-in-out infinite reverse",
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "50%": { transform: "translate(20px, -30px) rotate(2deg)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
