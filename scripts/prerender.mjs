// Renders the app to static HTML inside docs/index.html after `vite build`, so
// search engines and link previews see the full content without running JS.
// docs/404.html gets the same page (GitHub Pages serves it for unknown paths),
// marked noindex so only the real URL is indexed.
import { readFileSync, writeFileSync } from 'node:fs'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { createServer } from 'vite'

const OUT_DIR = 'docs'

const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
})

try {
  const { default: App } = await vite.ssrLoadModule('/src/App.jsx')
  const appHtml = renderToString(createElement(App))

  const template = readFileSync(`${OUT_DIR}/index.html`, 'utf8')
  if (!template.includes('<div id="root"></div>')) {
    throw new Error('Could not find <div id="root"></div> in the built index.html')
  }
  const page = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

  writeFileSync(`${OUT_DIR}/index.html`, page)
  writeFileSync(
    `${OUT_DIR}/404.html`,
    page.replace(
      '<meta name="robots" content="index, follow" />',
      '<meta name="robots" content="noindex" />',
    ),
  )
  console.log(`prerendered ${OUT_DIR}/index.html and ${OUT_DIR}/404.html`)
} finally {
  await vite.close()
}
