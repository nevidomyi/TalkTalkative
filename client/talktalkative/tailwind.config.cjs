/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'awesome-blue': '#0D6EFD',
      'hower-aw-blue': "#0A58CA",
      'awesome-red': '#FF4444',
      'hower-aw-red': '#EC404D',
      'text-msg': '#262626',
      'text-name': '#212121',
    },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
