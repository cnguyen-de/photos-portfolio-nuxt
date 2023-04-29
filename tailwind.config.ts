// Define tailwind config with class based dark mode
module.exports = {
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        primary: '#0000FF',
        secondary: '#2D2D2D',
        tertiary: '#3C3C3C'
      }
    }
  }
  // plugins: [require('@tailwindcss/forms')]
}
