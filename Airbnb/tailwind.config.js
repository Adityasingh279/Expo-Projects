// tailwind.config.js

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray500: "#727272",
        gray400: "#B1B1B1",
        gray300: "#B0B0B0",
        gray200: "#BFBFBF",
        gray100: "#DEDEDE",
        gray75: "#DDDDDD",
        gray60: "#F2F2F2",
        gray50: "#F7F7F7",
        blacklight: "#333333",
        black: "#000000",
        inklight: "#B0B0B0",
        inkstandard: "#717171",
        inklighter: "#697D95",
        inknormal: "#252525",
        ui: "#0047B3",
        uilighter: "#6BA6FF",
        uilightest: "#E6F0FF",
        orange: "#3C8826",
        brown: "#B24025",
        green: "#B24025",
        white: "#fff",
        blue: "#194CC3",
        brightred: "#DF4058",
        // redmixed: "Project Colours/B300",
      },
      zIndex: {
        '0': 0,
        '1': 1,
        '10': 10,
        '20': 20,
        '30': 30,
        '40': 40,
        '50': 50,
        // Add more values as needed
      },
    },
  },
  plugins: [],
};
