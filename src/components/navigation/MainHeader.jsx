import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline'
import { closeMobileNav, setLocale, setTheme, toggleMobileNav } from '../../app/uiSlice.js'
import { useI18n } from '../../i18n/useI18n.js'
import Container from '../common/Container.jsx'

function MainHeader() {
  const dispatch = useDispatch()
  const { mobileNavOpen, theme } = useSelector((state) => state.ui)
  const { t, locale } = useI18n()
  const navItems = [
    { label: t.nav.home, to: '/' },
    { label: t.nav.projects, to: '/du-an' },
    { label: t.nav.blog, to: '/bai-viet' },
    { label: t.nav.contact, to: '/lien-he' },
  ]

  const nextTheme = theme === 'system' ? 'light' : theme === 'light' ? 'dark' : 'system'
  const ThemeIcon = theme === 'dark' ? MoonIcon : theme === 'light' ? SunIcon : ComputerDesktopIcon

  return (
    <header className="sticky top-0 z-50 bg-[color:var(--header-bg)] backdrop-blur-xl border-b border-[var(--border-soft)]">
      <Container className="py-3.5">
        <div className="flex items-center justify-between gap-6">
          <NavLink to="/" className="text-base font-bold tracking-[-0.03em] text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors">
            {t.brand}
          </NavLink>

          <div className="hidden items-center gap-0.5 md:flex">
            <nav className="flex items-center">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `px-4 py-2 text-[13px] font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-[var(--accent)] font-semibold'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-1 ml-4 pl-4 border-l border-[var(--border-soft)]">
              <button
                type="button"
                onClick={() => dispatch(setLocale(locale === 'vi' ? 'en' : 'vi'))}
                className="flex items-center justify-center h-8 px-3 text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
              >
                {locale === 'vi' ? 'EN' : 'VI'}
              </button>

              <button
                type="button"
                onClick={() => dispatch(setTheme(nextTheme))}
                className="flex items-center justify-center h-8 w-8 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                aria-label={t.controls.theme}
              >
                <ThemeIcon className="w-4 h-4" />
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={() => dispatch(toggleMobileNav())}
            className="inline-flex h-9 w-9 items-center justify-center text-[var(--text-secondary)] md:hidden hover:text-[var(--accent)] transition-colors"
            aria-label={t.controls.menu}
          >
            {mobileNavOpen ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
          </button>
        </div>

        {mobileNavOpen ? (
          <div className="mt-3 grid gap-0 pb-4 md:hidden border-t border-[var(--border-soft)] pt-3">
            <div className="flex gap-0 mb-2 border-b border-[var(--border-soft)] pb-3">
              <button
                type="button"
                onClick={() => dispatch(setLocale(locale === 'vi' ? 'en' : 'vi'))}
                className="flex-1 py-2 text-[13px] font-medium text-[var(--text-secondary)]"
              >
                {t.controls.language}: {locale.toUpperCase()}
              </button>
              <button
                type="button"
                onClick={() => dispatch(setTheme(nextTheme))}
                className="flex-1 py-2 text-[13px] font-medium text-[var(--text-secondary)] flex items-center justify-center gap-2"
              >
                <ThemeIcon className="w-4 h-4" /> {theme}
              </button>
            </div>

            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => dispatch(closeMobileNav())}
                className={({ isActive }) =>
                  `px-0 py-3 text-[13px] font-medium border-b border-[var(--border-soft)] last:border-b-0 transition-all ${
                    isActive
                      ? 'text-[var(--accent)] font-semibold'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        ) : null}
      </Container>
    </header>
  )
}

export default MainHeader
