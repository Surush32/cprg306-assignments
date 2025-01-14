/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'neon-green': '#39FF14',
        'neon-blue': '#1F51FF',
        'neon-pink': '#FF1493',
        'neon-pink-dark': '#C71585',
        'neon-orange': '#FF4500',
        'neon-orange-dark': '#FF6347',
      },
    },
  },
  plugins: [],
};
