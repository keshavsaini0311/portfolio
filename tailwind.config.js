/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Amber phosphor, not the acid-green every dev terminal reaches for.
        shell: '#16110C',
        raised: '#1F1811',
        seam: '#33281C',
        amber: '#E8C077',
        'amber-bright': '#FFDCA8',
        'amber-dim': '#9C8258',
        // The one non-amber colour on the page. It means "this is a link".
        wire: '#7FB2E5',
      },
      fontFamily: {
        mono: ['"Spline Sans Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: { page: '56rem' },
    },
  },
  plugins: [],
}
