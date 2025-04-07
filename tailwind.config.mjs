/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        custom:
          "linear-gradient(180deg, #1F2937 0%, rgba(17, 24, 39, 0.00) 100%)",
        customSun:
          "var(--Cool-Gray-Gradient-light, linear-gradient(180deg, #F9FAFB 0%, rgba(249, 250, 251, 0.00) 100%))",
        customText1:
          "var(--Cool-Gray-Gradient-light, linear-gradient(180deg, #F9FAFB 0%, rgba(249, 250, 251, 0.00) 100%))",
        customText2:
          "var(--Cool-Gray-Gradient, linear-gradient(180deg, #111827 0%, #6B7280 100%))",
      },
      boxShadow: {
        custom: " 0px 12px 24px 0px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
