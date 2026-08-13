/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: '#05070B',
        cardDark: '#0B0F17',
        accentBlue: '#2563EB',
        accentGlow: '#3B82F6',
        borderDark: '#1E293B'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
      },
      boxShadow: {
        'blue-glow': '0 0 25px -5px rgba(59, 130, 246, 0.4)',
        'blue-glow-lg': '0 0 50px -10px rgba(59, 130, 246, 0.5)',
      }
    },
  },
  plugins: [],
}