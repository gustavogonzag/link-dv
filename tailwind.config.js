/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'verde':'#158700',
      'branco':'#F6F6F6',
      'amarelo':'#F2A922',
    },
    extend:{
      backgroundImage: {
        'verde-dv': "url('/BACKGROUND.png')",
      }
    }
  },
  plugins: [],
}

