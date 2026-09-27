// Renders the app to static HTML inside docs/index.html after `vite build`, so
// search engines and link previews see the full content without running JS.
// docs/404.html gets the same page (GitHub Pages serves it for unknown paths),
// marked noindex so only the real URL is indexed. Also writes docs/llms.txt, a
// plain Markdown summary for AI tools (https://llmstxt.org).
import { readFileSync, writeFileSync } from 'node:fs'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { createServer } from 'vite'

const OUT_DIR = 'docs'
const SITE_URL = 'https://nguyenquangvinh.id.vn/'

function toLlmsTxt(profile) {
  const links = [...profile.contacts, ...profile.socials]
  return [
    `# ${profile.name}`,
    '',
    `> ${profile.headline} ${profile.intro.join(' ')}`,
    '',
    `Website: ${SITE_URL}`,
    '',
    '## Contact',
    '',
    ...links.map((link) => `- ${link.label}: ${link.value ?? link.href}`),
    '',
    `## ${profile.services.title}`,
    '',
    ...profile.services.items.map((item) => `- **${item.title}**: ${item.text}`),
    '',
    `## ${profile.experience.title}`,
    '',
    ...profile.experience.items.flatMap((job) => [
      `### ${job.role} — ${job.company}`,
      '',
      ...(job.url ? [`Company website: ${job.url}`, ''] : []),
      ...job.text.flatMap((paragraph) => [paragraph, '']),
      `Focus: ${job.tags.join(', ')}`,
      '',
    ]),
    `## ${profile.cta.title}`,
    '',
    profile.cta.text,
    '',
  ].join('\n')
}

const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
})

try {
  const { default: App } = await vite.ssrLoadModule('/src/App.jsx')
  const { profile } = await vite.ssrLoadModule('/src/data/profile.js')
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
  writeFileSync(`${OUT_DIR}/llms.txt`, toLlmsTxt(profile))
  console.log(`prerendered ${OUT_DIR}/index.html, ${OUT_DIR}/404.html and ${OUT_DIR}/llms.txt`)
} finally {
  await vite.close()
}
