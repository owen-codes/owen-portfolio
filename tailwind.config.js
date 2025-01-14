/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        secondary: "#E54B4B",
        tertiary: "#171717",
        quaternary: "#1C1C1C",
      },
      fontFamily: {
        body: ["Poppins", "serif"],
      },
    },
  },
  plugins: [],
}