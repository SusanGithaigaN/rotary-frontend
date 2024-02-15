/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'home': "url('https://res.cloudinary.com/dfczhaomn/image/upload/v1707957184/bg_lldarr.jpg')",
      },
      colors: {
        // custom color palette
      },
    }
  },
  plugins: [],
}
