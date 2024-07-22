/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'bg': {
        100: "#252836",
        200: "#1F1D2B"
      },
      "primary": "#EA7C69",
    }
  },
  plugins: [],
}

