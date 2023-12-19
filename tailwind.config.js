/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green":"#0b4534",
        "ash":"#d7e0e4",
        "accent":"#a8c200",
      } 
    },
  },
  plugins: [],
}

