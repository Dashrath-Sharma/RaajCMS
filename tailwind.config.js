module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-green': '#026331',
        'main': '#08306b',
        'secondary': '#08519c',
      },
      fontFamily: {
        palanquin: ['Palanquin Dark', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        island: ['Island Moments', 'cursive'],
      },
    },
  },
  plugins: [],
};
