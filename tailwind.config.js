/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", 
  "./component/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "30px",
    },
    extend: {},
  },
  plugins: [],
};
