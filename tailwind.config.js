/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      animation: {
        navigate: "navigate 1s ease-in-out",
        timeout: "timeout 4s ease",
        pulse: "pulse 4s ease-in-out infinite",
      },
    },
    keyframes: {
      navigate: {
        from: { width: "50%" },
        to: { width: "0%" },
      },
      timeout: {
        from: { width: "100%" },
        to: { width: "0%" },
      },
      pulse: {
        "0%": { opacity: 1 },
        "50%": { opacity: 0.7 },
        "100%": { opacity: 1 },
      },
    },
  },
  plugins: [],
};
