/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        mobileS: "360px",
        mobileL: "425px",
        tabletM: "580px",
        "3xl": "1600px",
      },
    },
  },
  plugins: [],
};
