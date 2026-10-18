import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Chemins relatifs : le build fonctionne sur GitHub Pages, Vercel ou Netlify sans config.
  base: './',
})
