import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)"],
        heading: ["var(--font-montserrat)"],
        mono: ["'JetBrains Mono'", "'Fira Code'", "Consolas", "monospace"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        // Enhanced color palette for AI/Enterprise theme
        neural: {
          50: "rgb(240 253 249)",
          100: "rgb(209 250 238)",
          200: "rgb(153 246 220)",
          300: "rgb(74 222 183)",
          400: "rgb(16 185 129)",
          500: "rgb(5 150 105)",
          600: "rgb(4 120 87)",
          700: "rgb(6 95 70)",
          800: "rgb(6 78 59)",
          900: "rgb(6 66 52)",
        },
        quantum: {
          50: "rgb(238 242 255)",
          100: "rgb(224 231 255)",
          200: "rgb(199 210 254)",
          300: "rgb(165 180 252)",
          400: "rgb(129 140 248)",
          500: "rgb(99 102 241)",
          600: "rgb(79 70 229)",
          700: "rgb(67 56 202)",
          800: "rgb(55 48 163)",
          900: "rgb(49 46 129)",
        },
        cyber: {
          50: "rgb(240 249 255)",
          100: "rgb(224 242 254)",
          200: "rgb(186 230 253)",
          300: "rgb(125 211 252)",
          400: "rgb(56 189 248)",
          500: "rgb(14 165 233)",
          600: "rgb(2 132 199)",
          700: "rgb(3 105 161)",
          800: "rgb(7 89 133)",
          900: "rgb(12 74 110)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        "aurora": "aurora 60s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "slide": "slide 20s linear infinite",
        "neural-pulse": "neural-pulse 3s ease-in-out infinite",
        "data-flow": "data-flow 4s linear infinite",
        "quantum-spin": "quantum-spin 8s linear infinite",
        "holographic": "holographic 6s ease-in-out infinite",
        "matrix-rain": "matrix-rain 15s linear infinite",
        "circuit-glow": "circuit-glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        aurora: {
          from: { backgroundPosition: "50% 50%, 50% 50%" },
          to: { backgroundPosition: "350% 50%, 350% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          from: { boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)" },
          to: { boxShadow: "0 0 30px rgba(34, 197, 94, 0.6)" },
        },
        slide: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "neural-pulse": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        "data-flow": {
          "0%": { transform: "translateX(-100%) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateX(100%) rotate(180deg)", opacity: "0" },
        },
        "quantum-spin": {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "25%": { transform: "rotate(90deg) scale(1.1)" },
          "50%": { transform: "rotate(180deg) scale(1)" },
          "75%": { transform: "rotate(270deg) scale(0.9)" },
          "100%": { transform: "rotate(360deg) scale(1)" },
        },
        "holographic": {
          "0%, 100%": { 
            background: "linear-gradient(45deg, #00f5ff, #ff00f5, #f5ff00, #00f5ff)",
            backgroundSize: "400% 400%",
            backgroundPosition: "0% 50%"
          },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "matrix-rain": {
          "0%": { transform: "translateY(-100vh)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(100vh)", opacity: "0" },
        },
        "circuit-glow": {
          "0%": { 
            boxShadow: "0 0 5px rgba(56, 189, 248, 0.3), inset 0 0 5px rgba(56, 189, 248, 0.1)"
          },
          "100%": { 
            boxShadow: "0 0 20px rgba(56, 189, 248, 0.6), inset 0 0 10px rgba(56, 189, 248, 0.3)"
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "neural-grid": "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)",
        "circuit-pattern": "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(56, 189, 248, 0.1) 2px, rgba(56, 189, 248, 0.1) 4px)",
        "quantum-mesh": "conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(99, 102, 241, 0.1) 60deg, transparent 120deg, rgba(16, 185, 129, 0.1) 180deg, transparent 240deg, rgba(99, 102, 241, 0.1) 300deg, transparent 360deg)",
      },
      backdropBlur: {
        xs: '2px',
        '4xl': '72px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      scale: {
        '102': '1.02',
        '103': '1.03',
      },
    },
  },
  plugins: [],
};

export default config;
