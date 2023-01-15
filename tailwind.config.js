/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      visibility: ["group-hover"],
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
