/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#7DD3FC', // Azul claro
          DEFAULT: '#0284C7', // Azul padrão
          dark: '#0369A1', // Azul escuro
        },
        secondary: {
          light: '#FBCFE8', // Rosa claro
          DEFAULT: '#DB2777', // Rosa padrão
          dark: '#9D174D', // Rosa escuro
        },
        neutral: {
          light: '#F3F4F6', // Cinza claro
          DEFAULT: '#6B7280', // Cinza médio
          dark: '#374151', // Cinza escuro
        }
      }
    },
  },
  plugins: [],
}

