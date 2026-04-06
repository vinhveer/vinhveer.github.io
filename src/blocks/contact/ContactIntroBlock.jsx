import React from 'react'
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline'
import ButtonLink from '../../components/common/ButtonLink.jsx'
import Container from '../../components/common/Container.jsx'
import { useI18n } from '../../i18n/useI18n.js'

function ContactIntroBlock() {
  const { t } = useI18n()

  const contactItems = [
    {
      icon: <MapPinIcon className="w-5 h-5" />,
      label: t.home.location,
    },
    {
      icon: <PhoneIcon className="w-5 h-5" />,
      label: '0367 576 135 (Zalo)',
      href: 'tel:0367576135',
    },
    {
      icon: <EnvelopeIcon className="w-5 h-5" />,
      label: 'nguyenquangvinh300724@gmail.com',
      href: 'mailto:nguyenquangvinh300724@gmail.com',
    },
  ]

  return (
    <section className="bg-[var(--page-bg)] py-20 sm:py-28 transition-colors duration-300">
      <Container>
        {/* Eyebrow */}
        <p
          data-aos="fade-up"
          className="text-[14px] font-bold uppercase tracking-[0.15em] text-[var(--accent)] mb-5"
        >
          {t.contact.eyebrow}
        </p>

        {/* Title */}
        <h2
          data-aos="fade-up"
          data-aos-delay="60"
          className="max-w-3xl text-[clamp(1.5rem,4vw,2.5rem)] font-bold tracking-[-0.03em] leading-[1.15] text-[var(--text-primary)]"
        >
          {t.contact.title}
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="mt-4 max-w-xl text-[15px] leading-[1.8] text-[var(--text-secondary)]"
        >
          {t.contact.description}
        </p>

        <div className="mt-10 mb-10 h-px bg-[var(--border-soft)]" />

        {/* Contact items */}
        <div data-aos="fade-up" data-aos-delay="140" className="grid gap-0 max-w-lg">
          {contactItems.map((item, index) => {
            const inner = (
              <div className="group flex items-center gap-4 py-5 list-hover-accent">
                <span className="flex items-center justify-center w-10 h-10 bg-[var(--accent-light)] text-[var(--accent)] flex-shrink-0 transition-all duration-200 group-hover:bg-[var(--accent)] group-hover:text-white">
                  {item.icon}
                </span>
                <span className="text-[15px] text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                  {item.label}
                </span>
              </div>
            )

            return (
              <div key={index} className="border-b border-[var(--border-soft)] last:border-b-0">
                {item.href ? <a href={item.href}>{inner}</a> : inner}
              </div>
            )
          })}
        </div>

        {/* CTA — previously from FooterCtaBlock */}
        <div className="mt-10 mb-10 h-px bg-[var(--border-soft)]" />

        <div data-aos="fade-up" data-aos-delay="180" className="max-w-xl">
          <h3 className="text-xl sm:text-2xl font-bold tracking-[-0.02em] text-[var(--text-primary)]">
            {t.home.footerTitle}
          </h3>
          <p className="mt-3 text-[15px] leading-[1.8] text-[var(--text-secondary)]">
            {t.home.footerDescription}
          </p>
          <div className="mt-8">
            <ButtonLink href="tel:0367576135">{t.home.ctaPrimary}</ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ContactIntroBlock
