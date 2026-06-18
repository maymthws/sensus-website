import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand: metallic silver / chrome on near-black
        sensus: {
          50: "#f5f7f9",
          100: "#e3e8ed",
          200: "#c7d0d8",
          300: "#a4b0bc",
          400: "#7d8a98",
          500: "#5d6a78",
          600: "#3f4a56",
          700: "#2b343c",
          800: "#1a2128",
          900: "#0d1217",
          950: "#06090c",
        },
        accent: {
          // Cool steel-blue tint pulled from the chrome reflections
          DEFAULT: "#c4d0dc",
          strong: "#e6eef6",
          muted: "#8a98a6",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui"],
        mono: ["ui-monospace", "SFMono-Regular", "monospace"],
      },
      backgroundImage: {
        "chrome-grad":
          "linear-gradient(135deg, #f6f9fc 0%, #c7d3de 25%, #6c7a88 50%, #c7d3de 75%, #f6f9fc 100%)",
        "glass-sheen":
          "linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.08) 100%)",
        "radial-spotlight":
          "radial-gradient(ellipse at center, rgba(199,211,222,0.18) 0%, rgba(13,18,23,0) 60%)",
      },
      boxShadow: {
        glass:
          "0 8px 32px 0 rgba(13, 18, 23, 0.55), inset 0 1px 0 0 rgba(255,255,255,0.06)",
        "glass-hover":
          "0 12px 48px 0 rgba(13, 18, 23, 0.65), inset 0 1px 0 0 rgba(255,255,255,0.10)",
        chrome: "0 0 60px rgba(199, 211, 222, 0.18)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "rise-in": "riseIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "shimmer": "shimmer 6s linear infinite",
        "pulse-slow": "pulseSlow 4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        riseIn: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
