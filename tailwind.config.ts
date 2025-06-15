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

        // ===== SOPHISTICATED 4-COLOR SYSTEM =====
        
        // 1. CHARCOAL - Deep backgrounds and surfaces
        charcoal: {
          50: "rgb(248 250 252)",
          100: "rgb(241 245 249)",
          200: "rgb(226 232 240)",
          300: "rgb(203 213 225)",
          400: "rgb(148 163 184)",
          500: "rgb(100 116 139)",
          600: "rgb(71 85 105)",
          700: "rgb(51 65 85)",
          800: "rgb(30 41 59)",
          900: "rgb(15 23 42)",
          950: "rgb(2 6 23)",
        },

        // 2. OFF-WHITE - Text and light elements
        offwhite: {
          50: "rgb(255 255 255)",
          100: "rgb(254 254 254)",
          200: "rgb(250 250 250)",
          300: "rgb(245 245 245)",
          400: "rgb(229 229 229)",
          500: "rgb(212 212 212)",
          600: "rgb(163 163 163)",
          700: "rgb(115 115 115)",
          800: "rgb(82 82 82)",
          900: "rgb(64 64 64)",
        },

        // 3. STEEL BLUE - Muted primary actions
        steel: {
          50: "rgb(248 250 252)",
          100: "rgb(241 245 249)",
          200: "rgb(226 232 240)",
          300: "rgb(203 213 225)",
          400: "rgb(148 163 184)",
          500: "rgb(100 116 139)",
          600: "rgb(71 85 105)",
          700: "rgb(51 65 85)",
          800: "rgb(30 41 59)",
          900: "rgb(15 23 42)",
        },

        // 4. WARM GRAY - Secondary elements and borders
        warm: {
          50: "rgb(250 250 249)",
          100: "rgb(245 245 244)",
          200: "rgb(231 229 228)",
          300: "rgb(214 211 209)",
          400: "rgb(168 162 158)",
          500: "rgb(120 113 108)",
          600: "rgb(87 83 78)",
          700: "rgb(68 64 60)",
          800: "rgb(41 37 36)",
          900: "rgb(28 25 23)",
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
        "float": "float 6s ease-in-out infinite",
        "subtle-glow": "subtle-glow 3s ease-in-out infinite alternate",
        "slide": "slide 20s linear infinite",
        "pulse-subtle": "pulse-subtle 3s ease-in-out infinite",
        "scale-in": "scale-in 0.3s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "subtle-glow": {
          from: { boxShadow: "0 0 20px rgba(100, 116, 139, 0.1)" },
          to: { boxShadow: "0 0 30px rgba(100, 116, 139, 0.2)" },
        },
        slide: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "scale-in": {
          from: { transform: "scale(0.95)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "subtle-grid": "radial-gradient(circle at 1px 1px, rgba(245,245,245,0.02) 1px, transparent 0)",
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
