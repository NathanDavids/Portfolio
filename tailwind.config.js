/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red': '#D9171F',
        'BackgroundColour': '#000000',
        'PrimaryTextColour': '#FFFFFF',
        'SecondaryTextColour': '#D9171F',
      }
    },
  },
  plugins: [],
}