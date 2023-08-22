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
      headerbg: "#0D0D0D"
    },

    boxShadow: {
      custom: "0px 2px 4px 0px rgba(0, 0, 0, 0.15)"
    }
  },
  plugins: []
};
