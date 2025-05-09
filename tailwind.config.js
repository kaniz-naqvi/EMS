/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Make sure this points to your files where Tailwind classes are used
  ],
  theme: {
    extend: {
      colors: {
        primary: "#bb86fc",
        active: "#7e48c4",
      },
    },
  },
  plugins: [],
};
