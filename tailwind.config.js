/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0A0E17",
        surface: "#11161F",
        surface2: "#161D2B",
        border: "#222B3D",
        ink: "#E6EAF2",
        muted: "#8B96AC",
        accent: "rgb(var(--rgb-accent, 242 181 68) / <alpha-value>)",
        signal: "rgb(var(--rgb-signal, 94 234 212) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      keyframes: {
        blink: { "0%,49%": { opacity: "1" }, "50%,100%": { opacity: "0" } },
        floaty: { "0%,100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-8px)" } },
        spin: { from: { transform: "rotate(0deg)" }, to: { transform: "rotate(360deg)" } },
        "spin-reverse": { from: { transform: "rotate(360deg)" }, to: { transform: "rotate(0deg)" } },
        pulseGlow: { "0%,100%": { opacity: "0.5" }, "50%": { opacity: "1" } },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        floaty: "floaty 6s ease-in-out infinite",
        "orbit-slow": "spin 26s linear infinite",
        "orbit-medium": "spin-reverse 18s linear infinite",
        "orbit-fast": "spin 11s linear infinite",
        "pulse-glow": "pulseGlow 3.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
