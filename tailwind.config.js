/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
    },
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      "winter",
      "night",
      {
        mytheme: {
          "base-200": "#000000",
        },
      },
    ], // Enable light and dark themes
  },
};
