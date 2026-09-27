import { IconArrowRight } from '@tabler/icons-react'

function scrollToTop() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
}

// Notion-style callout: message, a button that scrolls back to the top, and a row of text links.
export default function CallToAction({ text, buttonLabel, links }) {
  return (
    <aside className="callout">
      <p className="callout-text">{text}</p>
      <button type="button" className="button button-primary" onClick={scrollToTop}>
        {buttonLabel}
        <IconArrowRight className="icon" size={16} stroke={1.8} aria-hidden="true" />
      </button>
      <nav className="callout-links" aria-label="Contact links">
        {links.map((link, index) => (
          <span className="callout-link" key={link.label}>
            {index > 0 && <span aria-hidden="true">·</span>}
            <a
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
            >
              {link.label}
            </a>
          </span>
        ))}
      </nav>
    </aside>
  )
}
