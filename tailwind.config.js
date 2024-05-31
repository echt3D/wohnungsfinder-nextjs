/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    "bg-frei",
    "bg-reserviert",
    "bg-verkauft",
    "hover:fill-frei",
    "hover:fill-reserviert",
    "hover:fill-verkauft",
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        "20vw": "20vw",
      },
      colors: {
        frei: "#7CB342",
        reserviert: "#FFA000",
        verkauft: "#535353",
      },
    },
  },
  plugins: [],
};
