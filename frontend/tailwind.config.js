/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: [
        "Poppins",
        ...require("tailwindcss/defaultTheme").fontFamily.sans,
      ],
      outfit: [
        "Outfit",
        ...require("tailwindcss/defaultTheme").fontFamily.sans,
      ],
      roboto:[
        "Roboto",
        ...require("tailwindcss/defaultTheme").fontFamily.sans,
      ]
    },
    scale: {
      "-100": "-1",
    },
    screens: {
      sm: "478px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1920px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
