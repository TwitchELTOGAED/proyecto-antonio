/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        colors: {
        'racing-red': '#E10600',    // Rojo Intenso [cite: 129]
        'racing-black': '#0D0D0D',  // Fondo principal muy oscuro [cite: 130]
        'racing-gray': '#2E2E2E',   // Gris de las tarjetas/superficies [cite: 127]
        'racing-cream': '#F5F5F5',  // Texto principal [cite: 128]
        'racing-blue': '#003F5C',   // Enlaces/Botones secundarios [cite: 131]
      },
      },
      fontFamily: {
        // Al ponerla en 'sans', Tailwind la usará automáticamente en todo
        sans: ['var(--font-montserrat)', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};