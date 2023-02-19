/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      "backgroundColor": {
        primary: {
          "50": "#f6edff",
          "100": "#313033",
          "400": "#9a82db",
          "500": "#000",
          "700": "#4f378b",
        },
        'neutral': {
          "material": {
            '700': "#484649",
            '800': "#313033",
            '900': "#1c1b1f"
          },
        }
      },
      "textColor": {
        "inherit": "inherit",
        "current": "currentColor",
        "transparent": "transparent",
        "black": "#000",
        "white": "#fff",
        "primary": {
          "50": "#f8fafc",
          "100": "rgba(127,103,90,1)",
          "200": "#d0bcff",
          "300": "#b69df8",
          "400": "#94a3b8",
          "500": "#7f67be",
          "600": "#475569",
          "700": "#fff",
          "800": "#1e293b",
          "900": "#0f172a"
        },
        'neutral': {
          "material": {
            "400": '#939094',
            '300': "#aeaaae"
          },
          "300": '#D4D4D4',
          "700": '#aeaaae',
          "600": '#D4D4D4',
        }
      },
    },
  },
  plugins: [],
}
