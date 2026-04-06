import React, { useEffect, useRef, useState } from 'react'
import { GlobeAltIcon, CodeBracketIcon, BoltIcon } from '@heroicons/react/24/outline'
import Container from '../../components/common/Container.jsx'
import { useI18n } from '../../i18n/useI18n.js'

const icons = [
  <GlobeAltIcon key="globe" className="w-7 h-7" />,
  <CodeBracketIcon key="code" className="w-7 h-7" />,
  <BoltIcon key="bolt" className="w-7 h-7" />,
]

function SolutionsBlock() {
  const { t } = useI18n()
  const solutions = [
    { title: t.home.solution1Title, description: t.home.solution1Desc, icon: icons[0] },
    { title: t.home.solution2Title, description: t.home.solution2Desc, icon: icons[1] },
    { title: t.home.solution3Title, description: t.home.solution3Desc, icon: icons[2] },
  ]

  return (
    <section id="giai-phap" className="bg-[var(--page-bg)] py-20 sm:py-28 transition-colors duration-300">
      <Container>
        {/* Header */}
        <p
          data-aos="fade-up"
          className="text-[14px] font-bold uppercase tracking-[0.15em] text-[var(--accent)] mb-5"
        >
          {t.home.solutionsEyebrow}
        </p>
        <h2
          data-aos="fade-up"
          data-aos-delay="60"
          className="max-w-3xl text-[clamp(1.5rem,4vw,2.5rem)] font-bold tracking-[-0.03em] leading-[1.15] text-[var(--text-primary)]"
        >
          {t.home.solutionsTitle}
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="mt-4 max-w-xl text-[15px] leading-[1.8] text-[var(--text-secondary)]"
        >
          {t.home.solutionsDescription}
        </p>

        {/* Stacking cards */}
        <div className="mt-16 relative">
          {solutions.map((solution, index) => (
            <StackCard key={solution.title} index={index} total={solutions.length}>
              <div className="flex items-start gap-6">
                <div className="flex items-center justify-center w-14 h-14 bg-[var(--accent-light)] text-[var(--accent)] flex-shrink-0 rounded-2xl">
                  {solution.icon}
                </div>
                <div className="flex-1">
                  <span className="text-[16px] font-bold text-[var(--text-muted)] tracking-[0.1em] uppercase">
                    0{index + 1}
                  </span>
                  <h3 className="mt-2 text-xl sm:text-2xl font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                    {solution.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-[15px] leading-[1.8] text-[var(--text-secondary)]">
                    {solution.description}
                  </p>
                </div>
              </div>
            </StackCard>
          ))}
        </div>
      </Container>
    </section>
  )
}

function StackCard({ children, index, total }) {
  const cardRef = useRef(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return
      const rect = cardRef.current.getBoundingClientRect()
      const stickyTop = 80

      // When card is stuck at top, scale down slightly based on how far past we scroll
      if (rect.top <= stickyTop + 2) {
        // Calculate how much the NEXT card has pushed this one
        const overlap = stickyTop - rect.top
        const maxOverlap = 200
        const progress = Math.min(1, Math.max(0, overlap / maxOverlap))
        const minScale = 1 - (index < total - 1 ? 0.04 * (total - 1 - index) : 0)
        setScale(1 - progress * (1 - minScale))
      } else {
        setScale(1)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [index, total])

  return (
    <div
      ref={cardRef}
      className="stack-card mb-4 last:mb-0"
      style={{
        zIndex: index + 1,
        top: `${80 + index * 8}px`,
        transform: `scale(${scale})`,
        transformOrigin: 'top center',
      }}
    >
      <div
        className="bg-[var(--surface-color)] border border-[var(--border-color)] p-8 sm:p-10 transition-colors duration-300 rounded-[28px] overflow-hidden"
      >
        {children}
      </div>
    </div>
  )
}

export default SolutionsBlock
