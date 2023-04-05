/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // fontFamily: {
      //   Ubuntu: ["crossorigin"],
      // },

      underline: {
        display: 'block',
        width: '100%',
        height: '2px',
        backgroundColor: '#FE5200',
        transform: 'scaleX(0)',
        transition: 'transform 0.2s ease-in-out',
      },

      colors: {
        black: "#181818",
        orange_light: "#FDF3EB",
        orange10: "#FE5200",
        white: "#F2F2F2",
      },
    },
  },

   variants: {
    extend: {
      textDecoration: ['hover', 'focus'],
    },
  },

  plugins: [],
};
