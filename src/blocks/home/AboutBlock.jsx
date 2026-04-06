import React from 'react'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import ButtonLink from '../../components/common/ButtonLink.jsx'
import Container from '../../components/common/Container.jsx'
import { useI18n } from '../../i18n/useI18n.js'

function AboutBlock() {
  const { t } = useI18n()

  return (
    <section className="bg-[var(--surface-color)] py-20 sm:py-28 transition-colors duration-300">
      <Container>
        {/* Eyebrow */}
        <p
          data-aos="fade-up"
          className="text-[14px] font-bold uppercase tracking-[0.15em] text-[var(--accent)] mb-5"
        >
          {t.home.aboutEyebrow}
        </p>

        {/* Title — full width, on top */}
        <h2
          data-aos="fade-up"
          data-aos-delay="60"
          className="max-w-3xl text-[clamp(1.5rem,4vw,2.5rem)] font-bold tracking-[-0.03em] leading-[1.15] text-[var(--text-primary)]"
        >
          {t.home.aboutTitle}
        </h2>

        {/* Divider */}
        <div className="mt-10 mb-10 h-px bg-[var(--border-soft)]" />

        {/* Content — below title */}
        <div data-aos="fade-up" data-aos-delay="120" className="max-w-2xl space-y-5 text-[15px] sm:text-base leading-[1.85] text-[var(--text-secondary)]">
          <p>{t.home.aboutBody1}</p>
          <p>{t.home.aboutBody2}</p>
          <p>{t.home.aboutBody3}</p>
        </div>

        {/* CTA */}
        <div data-aos="fade-up" data-aos-delay="180" className="mt-10">
          <ButtonLink to="/lien-he">{t.home.ctaPrimary}</ButtonLink>
        </div>
      </Container>
    </section>
  )
}

export default AboutBlock
