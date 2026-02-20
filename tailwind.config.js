/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#ececec',
        primary: '#1c3989',
        secondary: '#3b82f6',
        muted: '#e5e7eb',
        mutedStrong: '#768eb9',
        accent: '#9bbae2',
      },
    },
  },
  plugins: [],
};
