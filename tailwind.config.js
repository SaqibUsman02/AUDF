/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    
    backgroundPosition: {
      bottom: 'bottom',
      'bottom-4': 'center bottom 1rem',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': { width: "40%",
      "text-color": "#fcce35"},
      'right-top': 'right top',
      top: 'top',
      'top-4': 'center top 1rem',
    },

    extend: {
      keyframes: {
        text_fillUp: {
          "0%": {
            width: "0%",
          },
          "30%": {
            width: "20%",
          },
          "50%": {
            width: "40%",
            "text-color": "#fcce35",
          },
          "60%": {
            width: "45%",
          },
          "70%": {
            width: "50%",
            "text-color": "#fcce35",
          },
          "71%": {
            width: "fit-content",
          },
        },
      },
      animation: {
        text_fillUp: "text_fillUp 3s linear infinite",
      },
    },
  },
  plugins: [],
};
