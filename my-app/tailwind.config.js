/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        pacificoRegular: ["Pacifico_400Regular"],
      },
      colors: {
        freakyblue: "#511BE3",
        freakybluee: "#0000FE",
      },
    },
  },
  plugins: [],
};
