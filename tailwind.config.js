/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('src/public/pattern.svg')"
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')]
}
