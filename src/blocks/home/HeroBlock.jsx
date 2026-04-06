import React, { useEffect, useRef, useState, useMemo } from 'react'
import { ArrowDownIcon } from '@heroicons/react/24/outline'
import ButtonLink from '../../components/common/ButtonLink.jsx'
import Container from '../../components/common/Container.jsx'
import { useI18n } from '../../i18n/useI18n.js'

function HeroBlock() {
  const { t } = useI18n()
  const containerRef = useRef(null)
  const [wordProgress, setWordProgress] = useState(0)

  const words = useMemo(() => t.home.heroSubtitle.split(' '), [t.home.heroSubtitle])

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const vh = window.innerHeight

      const start = vh * 0.85
      const end = vh * 0.1
      const range = start - end

      if (rect.top >= start) {
        setWordProgress(0)
      } else if (rect.top <= end) {
        setWordProgress(words.length)
      } else {
        const progress = (start - rect.top) / range
        setWordProgress(Math.floor(progress * words.length))
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [words.length])

  return (
    <section className="hero-section">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}images/hero-bg.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.12,
        }}
      />
      <div className="hero-bg-overlay" />

      {/* Hero Title */}
      <Container className="hero-content pt-20 sm:pt-28 lg:pt-36 pb-12">
        <h1 className="max-w-4xl text-[clamp(2rem,5.5vw,3.75rem)] font-extrabold leading-[1.08] tracking-[-0.04em] text-[var(--text-primary)] animate-fade-in-up">
          {t.home.heroTitle}
        </h1>

        <div
          className="mt-10 flex flex-wrap items-center gap-3 animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          <ButtonLink to="/lien-he">{t.home.ctaPrimary}</ButtonLink>
          <ButtonLink href="#giai-phap" variant="secondary">{t.home.ctaSecondary}</ButtonLink>
        </div>
      </Container>

      {/* Karaoke Description — word by word */}
      <div className="relative z-[2] bg-[var(--page-bg)]">
        <Container className="py-20 sm:py-28 lg:py-36">
          <p
            ref={containerRef}
            className="max-w-4xl text-[clamp(1.75rem,4.5vw,3.25rem)] font-bold leading-[1.25] tracking-[-0.03em]"
          >
            {words.map((word, i) => (
              <span
                key={i}
                className="transition-colors duration-300"
                style={{
                  color: i < wordProgress ? 'var(--text-primary)' : 'var(--text-muted)',
                }}
              >
                {word}{i < words.length - 1 ? ' ' : ''}
              </span>
            ))}
          </p>
        </Container>
      </div>

      {/* Scroll hint */}
      <div className="relative z-[2] flex justify-start pb-8 bg-[var(--page-bg)]">
        <Container>
          <div className="flex items-center gap-2 text-[var(--text-muted)]">
            <ArrowDownIcon className="w-4 h-4" />
            <span className="text-[11px] uppercase tracking-[0.15em] font-medium">Scroll</span>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default HeroBlock
