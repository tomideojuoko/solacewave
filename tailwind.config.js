/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          deep:  '#004C60',
          mid:   '#663916',
          light: '#804a1e',
          pale:  '#F8F0E8',
        },
        cream:    '#F8F0E8',
        sand:     '#EED7BF',
        terra:    '#663916',
        gold:     '#4a2810',
        charcoal: '#2a1a0e',
        muted:    '#5a3a20',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
