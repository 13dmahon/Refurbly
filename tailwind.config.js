/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        refurbly: {
          navy: '#3d4f5c',
          charcoal: '#2d3436',
          mist: '#b2bec3',
          sage: '#a8b5a0',
          gold: '#d4af37',
        }
      }
    },
  },
  plugins: [],
}
