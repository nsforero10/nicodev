/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    fontFamily: {
      mono: ["Roboto Mono", "monospace"],
      display: ["Russo One", "sans-serif"],
    },
    extend: {
      colors: {
        teal: "#14FFEC",
        white: "#FFFFFF",
        black: "#212121",
        gray: "#323232",
        "light-gray": "#A1A1A1",
        "dark-teal": { DEFAULT: "#0D7377", 50: "#0D737780" },
      },
      plugins: [],
    },
  },
};
