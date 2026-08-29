/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#EDEFF2',
        card: '#E4E7EC',
        ink: '#12161D',
        graphite: '#55606E',
        rule: '#CDD3DB',
        cobalt: '#1B3BEF',
        rust: '#B4451F',
        console: '#111721',
        'console-line': '#1E2734',
        'console-dim': '#7C8899',
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        body: ['Newsreader', 'Georgia', 'serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        page: '78rem',
      },
    },
  },
  plugins: [],
}
