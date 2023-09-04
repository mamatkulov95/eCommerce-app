/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],

  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/photos/hero-img.svg')"
      },
      height: {
        200: "220px"
      },
      boxShadow: {
        green: "0 4px 6px rgba(75, 175, 60, 0.2)"
      }
    },

    screens: {
      sm: "340px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
    },

    colors: {
      white: "#FFFFFF",
      headerbg: "#0D0D0D",
      hoverColor: "#26C6DA"
    }
  },
  plugins: []
};
