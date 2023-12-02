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
    },
  },
  plugins: [],
};
