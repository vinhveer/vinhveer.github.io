import React from 'react'
import ButtonLink from '../../components/common/ButtonLink.jsx'
import Container from '../../components/common/Container.jsx'
import { useI18n } from '../../i18n/useI18n.js'

function FooterCtaBlock() {
  const { t } = useI18n()

  return (
    <section className="bg-[var(--page-bg)] py-20 sm:py-24 transition-colors duration-300">
      <Container>
        <div data-aos="fade-up">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-[var(--accent)]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--accent)]">
              {t.home.footerEyebrow}
            </span>
          </div>

          <h2 className="max-w-2xl text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold tracking-[-0.03em] leading-[1.15] text-[var(--text-primary)]">
            {t.home.footerTitle}
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-[1.85] text-[var(--text-secondary)]">
            {t.home.footerDescription}
          </p>

          <div className="mt-8">
            <ButtonLink to="/lien-he">{t.home.ctaPrimary}</ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FooterCtaBlock
