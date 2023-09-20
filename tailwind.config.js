/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,svelte}'],
  theme: {
    extend: {
      colors: {
        default: '#fbfbfb',
        primary: {
          100: '#631d76',
          200: '#2e2532',
          300: '#201a23'
        },
        secondary: '#9e4770'
      },
      fontFamily: {
        sans: ['Work Sans Variable', 'sans-serif']
      }
    }
  }
}
