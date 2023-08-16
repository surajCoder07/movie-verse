/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue-3": "var(--primary-blue-3)",
        "primary-blue-2": "var(--primary-blue-2)",
        "primary-blue-1": "var(--primary-blue)",
        "blue-light-1": "var(--blue-light-1)",
        "blue-light-2": "var(--blue-light-2)",
        orange: "var(--orange)",
      },
      backgroundImage: {
        gradient: "var(--gradient)",
        "opacity-top": "var(--opacity-top)",
        "opacity-bottom": "var(--opacity-bottom)",
      },
      fontFamily: {
        font: "var(font-family)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
