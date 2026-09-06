/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        onefi: {
          50: "#f5f0ff",
          100: "#ede5ff",
          200: "#ddccff",
          500: "#7c3aed",
          600: "#6d28d9",
          700: "#5b21b6"
        }
      },
      boxShadow: {
        soft: "0 4px 18px rgba(20, 24, 40, 0.06)"
      }
    }
  },
  plugins: []
};
