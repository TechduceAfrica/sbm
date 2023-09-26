/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "nav-border": "#EBEAEA",
        "light-white": "#FAFAFB",
        "light-white-100": "#F1F4F5",
        "light-white-200": "#d7d7d7",
        "light-white-300": "#F3F3F4",
        "light-white-400": "#E2E5F1",
        "light-white-500": "#E4E4E4",
        gray: "#4D4A4A",
        "gray-100": "#3d3d4e",
        "black-100": "#252525",
        "primary-blue": "#0048a0",
        "footer-blue": "#052042",
        "gray-50": "#D9D9D9",
        active: "#ABD1FF",
        "wine-red": "#722F37",
        "secondary-blue": "#ebf4ff",
        "secondary-blue-2": "#F0F7FF",
        ghostwhite: "#f7fbff",
        "body-text-colour": "#333",
        lightsteelblue: {
          "100": "#c2ddff",
          "200": "rgba(194, 221, 255, 0.4)",
        },
        "switcher-color": "#99C7FF",
      },
      boxShadow: {
        menu: "0px 159px 95px rgba(13,12,34,0.01), 0px 71px 71px rgba(13,12,34,0.02), 0px 18px 39px rgba(13,12,34,0.02), 0px 0px 0px rgba(13,12,34,0.02)",
      },
      screens: {
        xs: "400px",
      },
      maxWidth: {
        "10xl": "1680px",
      },
      fontFamily: {
        primary: ["Averta-CY-Regular", "Sarabun"],
        "body-text-2": "Sarabun",
        primaryBold: ["Averta-CY-Bold", "Sarabun"],
        primarySemibold: ["Averta-CY-Semibold", "Sarabun"],
        primaryExtrabold: ["Averta-CY-Extrabold", "Sarabun"],
      },
    },
  },
  plugins: [],
};
