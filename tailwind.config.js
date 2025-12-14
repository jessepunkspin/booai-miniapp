/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8B5CF6",
        secondary: "#3B82F6",
        success: "#10B981",
        warning: "#F59E0B"
      },
      backgroundImage: {
        'purple-blue': 'linear-gradient(135deg,#8B5CF6 0%,#3B82F6 100%)',
        'dark-grad': 'linear-gradient(180deg,#0f1724, #000000)'
      }
    }
  },
  plugins: []
};
