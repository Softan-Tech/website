/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        "primary-light": "#6366F1",
        "primary-dark": "#4338CA",
        secondary: "#312E81"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"]
      }
    }
  },
  plugins: []
};
