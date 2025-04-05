/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        neo: "8px 8px 20px #1a1a1a, -8px -8px 20px #2e2e2e",
        glass: "0 4px 30px rgba(0, 0, 0, 0.5)",
      },
      colors: {
        glassWhite: "rgba(255,255,255,0.1)",
      },
      backdropBlur: {
        glass: '10px',
      },
      dropShadow: {
        glow: "0 0 20px rgba(0,255,255,0.6)",
      }
    },
  },
  plugins: [],
}
