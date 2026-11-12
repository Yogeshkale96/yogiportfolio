/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        13: "3.25rem",
      },
      colors: {
        bg: {
          DEFAULT: "#090909",
          card: "#0d0d0d",
          light: "#111111",
        },
        primary: {
          DEFAULT: "#8B5CF6",
          light: "#A78BFA",
          dark: "#7C3AED",
        },
        secondary: {
          DEFAULT: "#A855F7",
          light: "#C084FC",
          dark: "#9333EA",
        },
        accent: {
          DEFAULT: "#EC4899",
          light: "#F472B6",
          dark: "#DB2777",
        },
        muted: "#A1A1AA",
        border: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)",
        "gradient-secondary": "linear-gradient(135deg, #A855F7 0%, #EC4899 100%)",
        "gradient-accent": "linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)",
        "gradient-hero": "linear-gradient(135deg, #090909 0%, #0d0d0d 50%, #090909 100%)",
        "gradient-text": "linear-gradient(135deg, #8B5CF6, #A855F7, #EC4899)",
        "gradient-card": "linear-gradient(145deg, rgba(17,17,17,0.9) 0%, rgba(9,9,9,0.95) 100%)",
      },
      boxShadow: {
        glow: "0 0 30px rgba(139,92,246,0.3)",
        "glow-secondary": "0 0 30px rgba(168,85,247,0.3)",
        "glow-accent": "0 0 30px rgba(236,72,153,0.3)",
        "glow-strong": "0 0 40px rgba(139,92,246,0.5)",
        card: "0 8px 32px rgba(0,0,0,0.4)",
        "card-hover": "0 12px 48px rgba(139,92,246,0.2)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-reverse": "float-reverse 7s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
        spin: "spin 20s linear infinite",
        "spin-reverse": "spin-reverse 25s linear infinite",
        glow: "glow 3s ease-in-out infinite",
        "gradient-x": "gradient-x 5s ease infinite",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
        marquee: "marquee 30s linear infinite",
        "pulse-ring": "pulse-ring 3s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        blob: "blob 12s ease-in-out infinite",
        "blob-slow": "blob 18s ease-in-out infinite",
        drift: "drift 15s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "float-reverse": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(20px)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: "0.8" },
          "100%": { transform: "scale(1.4)", opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(40px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-30px, 30px) scale(0.9)" },
        },
        "blob-slow": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(-50px, 40px) scale(1.05)" },
          "66%": { transform: "translate(30px, -30px) scale(0.95)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(20px, -15px)" },
          "50%": { transform: "translate(-15px, 20px)" },
          "75%": { transform: "translate(-20px, -10px)" },
        },
      },
    },
  },
  plugins: [],
}
