import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'

// Single-page site: any path shows the same page, so normalize the URL to "/".
if (window.location.pathname !== '/') {
  window.history.replaceState(null, '', '/' + window.location.hash)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
