import React from 'react'

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)] mb-4">{eyebrow}</p>
      ) : null}
      <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-[-0.03em] leading-[1.15] text-[var(--text-primary)]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-lg leading-[1.8] text-[var(--text-secondary)]">{description}</p>
      ) : null}
    </div>
  )
}

export default SectionHeading
