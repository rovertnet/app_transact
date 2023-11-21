/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode : "class",
  theme: {
    extend: {
      background: {
        "bleu" : "#3b4bff",
      },
    },
  },
  plugins: [],
}

