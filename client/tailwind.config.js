/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F8FAFC",
        section: "#EEF2F7",
        primary: "#3B82F6",
        accent: "#60A5FA",
        heading: "#1E293B",
        body: "#475569",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};