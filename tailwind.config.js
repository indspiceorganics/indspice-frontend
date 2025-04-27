// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    // Ensure this points to all files where you use Tailwind classes
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          'dark-green': '#2A5B2F',      // For main headings, logo text
          'light-green': '#5F8D4E',     // For accents, secondary text, icons
          'gold': '#B45309',          // For CTAs, borders, highlights
        },
        // Using default Tailwind 'stone' for common neutrals
      },
      fontFamily: {
        // Set Montserrat as the default sans-serif font for the site body
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
        // Define Lora as the serif font option
        serif: ['Lora', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  // Correct syntax for loading plugins:
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}