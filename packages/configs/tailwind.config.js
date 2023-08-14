/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "../../packages/ui/components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};

module.exports = config;
