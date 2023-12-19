/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--color-primary) / <alpha-value>)",
        secondary: "#2D2D2D",
        tertiary: "#3C3C3C",
      },
    },
  },
  // plugins: [require('@tailwindcss/forms')]
};
