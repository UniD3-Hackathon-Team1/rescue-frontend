/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{html,js,ts,tsx}',
    './components/**/*.{html,js,ts,tsx}',],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#228be6",
          "secondary": "#f000b8",
          "accent": "#1dcdbc",
          "neutral": "#2b3440",
          "base-100": "#ffffff",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ]
  },
  plugins: [require("daisyui")],
}

