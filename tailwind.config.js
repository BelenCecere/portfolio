/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        90: "90%",
        45: "45%",
      },
      borderRadius: {
        DEFAULT: "4px", // Aplica a todos los elementos
      },
      fontSize: {
        "sm-90": "0.9rem", // Añade la nueva clase de tamaño de fuente
      },
      colors: {
        "dark-blue-button": "#217BCE", //azul
        "cyan-text": "#217BCE",
        "yellow-label-text": "#FEBC14", //amarillo
        "gray-paragraphs": "#4F4F4F", //gris
        "yellow-button-weekly": "#FCBC11", //amarillo
        "20%": "#6373F7", //azul claro
        "60%": "#FCBC11", //amarillo opaco
        "80%": "#FEBD93", //naranjita traslucido
        "100%": "#96DB76", //verde traslucido
        "black-opaque-50%": "#00000080",
        inactive: "#FF6B6B", //rojo traslucido
      },
    },
  },
  plugins: [],
};
