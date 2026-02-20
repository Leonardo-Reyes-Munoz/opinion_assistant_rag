/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#f8f9fb',
        primary: '#1c3989',
        secondary: '#3b82f6',
        muted: '#e5e7eb',
        accent: '#dbeafe',
      },
    },
  },
  plugins: [],
};
