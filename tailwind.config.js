/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          deep:  '#0a3d3d',
          mid:   '#1a5c5c',
          light: '#2d7a7a',
          pale:  '#e8f4f4',
        },
        cream:    '#faf6f0',
        sand:     '#e8dcc8',
        terra:    '#b5623a',
        gold:     '#d4944a',
        charcoal: '#1a1a1a',
        muted:    '#6b7280',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
