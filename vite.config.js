import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves 404.html for unknown paths, so a copy of index.html
// makes every path load the app.
function spaFallback() {
  let outDir
  return {
    name: 'spa-fallback',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      copyFileSync(resolve(outDir, 'index.html'), resolve(outDir, '404.html'))
    },
  }
}

export default defineConfig({
  plugins: [react(), spaFallback()],
  build: {
    // GitHub Pages serves this folder (Settings → Pages → Deploy from branch → /docs)
    outDir: 'docs',
  },
})
