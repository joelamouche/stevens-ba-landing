/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        accent: "#E7B44D",
        ink: "#0F172A",
        muted: "#5B6577",
        surface: "#FFF7E6",
        border: "#EADDC2",
      },
    },
  },
  plugins: [],
};
