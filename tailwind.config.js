/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Drafting paper: warm grey-green, the colour of an engineering print.
        draft: '#E9EBE5',
        panel: '#F3F4EF',
        ink: '#1A1E1B',
        graphite: '#525A52',
        rule: '#C3C9BE',
        // Viridian is the plotter pen: structure, links, the selected node.
        viridian: '#0B6E4F',
        // Hot only marks an event in flight, never decoration.
        hot: '#B03A1A',
      },
      fontFamily: {
        mono: ['"Martian Mono"', 'ui-monospace', 'monospace'],
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
      },
      maxWidth: { page: '76rem' },
    },
  },
  plugins: [],
}
