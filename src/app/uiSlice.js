import { createSlice } from '@reduxjs/toolkit'

const getInitialLocale = () => {
  if (typeof window === 'undefined') {
    return 'en'
  }

  return window.localStorage.getItem('locale') ?? 'vi'
}

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return 'system'
  }

  return window.localStorage.getItem('theme') ?? 'system'
}

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    mobileNavOpen: false,
    locale: getInitialLocale(),
    theme: getInitialTheme(),
  },
  reducers: {
    closeMobileNav(state) {
      state.mobileNavOpen = false
    },
    setLocale(state, action) {
      state.locale = action.payload
    },
    setTheme(state, action) {
      state.theme = action.payload
    },
    toggleMobileNav(state) {
      state.mobileNavOpen = !state.mobileNavOpen
    },
  },
})

export const { closeMobileNav, setLocale, setTheme, toggleMobileNav } = uiSlice.actions

export default uiSlice.reducer
