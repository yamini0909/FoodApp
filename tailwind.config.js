/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        "3xl": "box-shadow: 0 -6px 10px 5px rgba(10,0,0,0.5)",
      }
    },
  },
  plugins: [],
}