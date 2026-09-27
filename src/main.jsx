import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'

// Single-page site: any path shows the same page, so normalize the URL to "/".
if (window.location.pathname !== '/') {
  window.history.replaceState(null, '', '/' + window.location.hash)
}

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// The production build ships prerendered HTML (scripts/prerender.mjs): hydrate it.
// In dev the root is empty, so render from scratch.
if (root.hasChildNodes()) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
