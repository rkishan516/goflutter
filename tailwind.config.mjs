/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'flutter-blue': '#027DFD',
        'flutter-dark': '#0B2C4D',
      }
    }
  },
  plugins: [],
}