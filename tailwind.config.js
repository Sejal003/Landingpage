module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#f8f8fa",
          200: "#eeeeee",
          300: "#e6e6e6",
          400: "#bbbbbb",
          500: "#a6a6a6",
          900: "#191a15",
          "50_01": "#f9f8fe",
          "50_02": "#f9fafb",
          "50_03": "#f5fafa",
          "200_01": "#f0f0ef",
          "900_01": "#161c28",
        },
        deep_purple: { 700: "#52459f" },
        teal: {
          200: "#74c9a9",
          300: "#54bd95",
          "300_01": "#52bd94",
          "300_02": "#6ac2a1",
          "200_01": "#84d9b9",
        },
        yellow: { A400: "#fee900" },
        black: { 900: "#000000", "900_26": "#00000026", "900_0c": "#0000000c" },
        indigo: { 50: "#dbe5fa", "50_01": "#e7ecf3" },
        light_blue: { A700: "#0f8ce9" },
        deep_orange: { 200: "#ffaa94" },
        blue_gray: {
          100: "#d9d9d9",
          300: "#a9a7b6",
          900: "#232937",
          "900_01": "#222938",
        },
        white: { A700_6c: "#ffffff6c", A700: "#ffffff" },
        amber: { 300: "#fbc75e", 400: "#ffc728" },
        blue: { 50: "#e9effc" },
      },
      boxShadow: {
        bs: "0px 4px  9px 0px #0000000c",
        bs1: "0px 14px  44px 0px #00000026",
      },
      fontFamily: { inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
