/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        first: "#0b4534",
        second: "#a8c200",
        third: "#d7e0e4",
      },
    },
  },
  plugins: [require("daisyui")],
};
