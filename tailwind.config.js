/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        fenix: {
          ivory: '#FAFAF6',
          cream: '#F4F0E8',
          sand: '#E6DFD2',
          linen: '#EFEBE2',
          // Fire/Amber accents
          ember: '#D4703A',
          'ember-light': '#E08B56',
          'ember-deep': '#B85A28',
          amber: '#C98A3C',
          'amber-light': '#DCA55A',
          'amber-deep': '#A06E28',
          // Copper undertone
          copper: '#B07A50',
          'copper-light': '#C99570',
          // Charcoal neutrals
          'char-900': '#1E1B18',
          'char-800': '#2E2924',
          'char-700': '#3E3830',
          'char-600': '#564E44',
          'char-500': '#706760',
          'char-400': '#918980',
          'char-300': '#B5AFA7',
          'char-200': '#D4CFC7',
          // Accent — deep plum for events/summits
          plum: '#6E4B5E',
          'plum-light': '#8D6679',
          // Accent — sage for talent/growth
          sage: '#6B8C62',
          'sage-light': '#8AAE80',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Cormorant Garamond', 'Garamond', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'flame': 'flame 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        flame: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
};
