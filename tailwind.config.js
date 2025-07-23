/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'maptiva-green-light': '#A2B29F',
        'maptiva-green-medium': '#6B8E23',
        'maptiva-green-dark': '#4B5320',
        'maptiva-green-accent': '#8FBC8F',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}