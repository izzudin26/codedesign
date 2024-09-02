/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "kourse-primary": "#131D41",
        "kourse-secondary": "#FF5C00",
        "digidaw-primary": "#353998",
        "digidaw-secondary": "#27637D"
      },
      fontFamily: {
        sans3: ["Source Sans 3", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        notoSans: ["Noto Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
