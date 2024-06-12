/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

module.exports = {
  safelist: [
    "text-frei",
    "text-reserviert",
    "text-verkauft",
    "bg-frei",
    "bg-reserviert",
    "bg-verkauft",
    "fill-frei",
    "fill-reserviert",
    "fill-verkauft",
    "hover:fill-frei",
    "hover:fill-reserviert",
    "hover:fill-verkauft",
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
      boxShadow: {
        custom: "inset 12px -100px 23px -12px rgba(233, 233, 233, 1);",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
