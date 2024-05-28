/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: ["hover:fill-frei", "hover:fill-reserviert", "hover:fill-verkauft"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        "10vw": "10vw",
      },
      colors: {
        frei: "#7CB342",
        reserviert: "#FFA000",
        verkauft: "#BF360C",
      },
    },
  },
  plugins: [],
};
