/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors:{
      'bg-color': '#F9F9F9',
      'onboard-bg': '#fff',
      'btn-color': '#3766E8',
      'paragraph-color': '#545454',
      'input-border': '#E5E5E5',
    },
    fontFamily:{
      'inter': ['Inter', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
    }
  },
  extend: {},
  plugins: [],
}
// font-family: 'Inter', sans-serif;
// font-family: 'Roboto', sans-serif;
