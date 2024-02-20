/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "HomePageBG": "url('/src/assets/HomePageBG.jpg')",
        "HomePageBG2": "url('/src/assets/HomePageBG2.jpg')",
        "HomePageBG3": "url('/src/assets/HomePageBG4.jpg')",
       
      },
    },
  },
  plugins: [],
};
// https://magickhome.com/india/offerings/