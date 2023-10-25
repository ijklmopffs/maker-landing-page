/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: () => ({
        "bg-tablet": "url('/assets/bg-hero-squiggle.svg')",
        "bg-footer": "url('/assets/bg-footer-squiggle.svg')",
      }),
    },
  },
  plugins: [],
};
