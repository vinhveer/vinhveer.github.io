import { useEffect } from 'react'
import { useSelector } from 'react-redux'

function getSystemTheme() {
  if (typeof window === 'undefined') {
    return 'light'
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useThemeEffect() {
  const theme = useSelector((state) => state.ui.theme)
  const locale = useSelector((state) => state.ui.locale)

  useEffect(() => {
    const root = document.documentElement
    const resolvedTheme = theme === 'system' ? getSystemTheme() : theme

    root.dataset.theme = resolvedTheme
    root.lang = locale
    window.localStorage.setItem('theme', theme)
    window.localStorage.setItem('locale', locale)

    if (theme !== 'system') {
      return undefined
    }

    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (event) => {
      root.dataset.theme = event.matches ? 'dark' : 'light'
    }

    media.addEventListener('change', handler)

    return () => media.removeEventListener('change', handler)
  }, [locale, theme])
}
