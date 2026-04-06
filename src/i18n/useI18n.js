import { useSelector } from 'react-redux'
import { messages } from './messages.js'

export function useI18n() {
  const locale = useSelector((state) => state.ui.locale)

  return {
    locale,
    t: messages[locale] ?? messages.vi,
  }
}
