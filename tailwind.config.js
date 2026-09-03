export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1C1C1A',
        night: '#171716',
        ivory: '#F5F1E8',
        sand: '#F8F6F1',
        rust: '#B65E3C',
        bronze: '#9A7B5B',
        graphite: '#222222',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.24em',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
};
