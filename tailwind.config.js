/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors:{
      'black': '#000000',
      'purple' : '#9340ff',
      'pink' : '#ff3c5f'
    },
    fontFamily:{
      Poppins: ["poppins-bold","cursive"],
      Poppinsb: ["poppins-bold","bold"],
    },
    screens:{
      'lg' : '1350px',
      'md' : '968px',
      'sm' : '640px',
      'xs' : '470px',
    },
  },
  plugins: [],
};
