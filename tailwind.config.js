module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('/path/to/your/image.jpg')",
        'gradient-to-r': 'linear-gradient(to right,var(--tw-gradient-stops))',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}