import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // GitHub Pages serves this folder (Settings → Pages → Deploy from branch → /docs).
    // scripts/prerender.mjs then fills in index.html and writes 404.html.
    outDir: 'docs',
  },
})
