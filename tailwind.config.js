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
      fontSize: {
        'xs': 'var(--font-size-xs)' /* 12px */,
        'sm': 'var(--font-size-sm)' /* 14px */,
        'base': 'var(--font-size-base)' /* 16px */,
        'lg': 'var(--font-size-lg)' /* 18px */,
        'xl': 'var(--font-size-xl)' /* 20px */ /* BUTTON TEXT MD AND ABOVE */,
        '2xl':
          'var(--font-size-2xl)' /* 24px */ /* P TAGS (SECTION PARAGRAPH) */,
        '3xl': 'var(--font-size-3xl)' /* 30px */,
        '4xl': 'var(--font-size-4xl)' /* 32px */,
        '5xl': 'var(--font-size-5xl)' /* 40px */,
        '6xl': 'var(--font-size-6xl)' /* 48px */,
        '7xl': 'var(--font-size-7xl)' /* 50px */,
        '8xl': 'var(--font-size-8xl)' /* 55px */ /* SECTION TITLE */,
        '9xl': 'var(--font-size-9xl)' /* 64px */,
        '10xl': 'var(--font-size-10xl)' /* 70px */,
        '11xl': 'var(--font-size-11xl)' /* 75px */,
        '12xl': 'var(--font-size-12xl)' /* 80px */,
        '13xl': 'var(--font-size-13xl)' /* 90px */,
        '14xl': 'var(--font-size-14xl)' /* 100px */,
      },
    },
  },
  plugins: [],
};
