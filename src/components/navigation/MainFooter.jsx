import React from 'react'
import { NavLink } from 'react-router-dom'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { useI18n } from '../../i18n/useI18n.js'
import Container from '../common/Container.jsx'

function MainFooter() {
  const { t } = useI18n()

  const navItems = [
    { label: t.nav.home, to: '/' },
    { label: t.nav.projects, to: '/du-an' },
    { label: t.nav.blog, to: '/bai-viet' },
    { label: t.nav.contact, to: '/lien-he' },
  ]

  return (
    <footer className="footer-main">
      <Container className="py-14 sm:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr] lg:gap-16">
          {/* Brand */}
          <div>
            <p className="text-base font-bold text-[var(--footer-heading)] tracking-[-0.02em]">
              {t.brand}
            </p>
            <p className="mt-3 text-sm leading-[1.7] max-w-[280px]">
              {t.footer.copyright}
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--footer-heading)] mb-5 opacity-50">
              {t.nav.home === 'Home' ? 'Navigation' : 'Điều hướng'}
            </p>
            <nav className="flex flex-col gap-2.5">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} className="text-sm w-fit">
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--footer-heading)] mb-5 opacity-50">
              {t.home.footerEyebrow}
            </p>
            <div className="flex flex-col gap-3.5 text-sm">
              <a href="tel:0367576135" className="flex items-center gap-3">
                <PhoneIcon className="w-4 h-4 opacity-40 flex-shrink-0" />
                0367 576 135
              </a>
              <a href="mailto:nguyenquangvinh300724@gmail.com" className="flex items-center gap-3">
                <EnvelopeIcon className="w-4 h-4 opacity-40 flex-shrink-0" />
                nguyenquangvinh300724@gmail.com
              </a>
              <span className="flex items-center gap-3">
                <MapPinIcon className="w-4 h-4 opacity-40 flex-shrink-0" />
                {t.footer.location}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-6 border-t border-white/[0.06] flex flex-col gap-2 sm:flex-row sm:justify-between text-[11px] opacity-30 tracking-wider">
          <p>{t.footer.copyright}</p>
          <p>React • {new Date().getFullYear()}</p>
        </div>
      </Container>
    </footer>
  )
}

export default MainFooter
