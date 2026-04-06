import React, { StrictMode } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { createRoot } from 'react-dom/client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import { queryClient } from './app/queryClient.js'
import { store } from './app/store.js'
import { useThemeEffect } from './app/useThemeEffect.js'
import './styles.css'

function AppShell() {
  useThemeEffect()

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 24,
    })
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <App />
      </HashRouter>
    </QueryClientProvider>
  )
}

function Root() {
  return (
    <StrictMode>
      <Provider store={store}>
        <AppShell />
      </Provider>
    </StrictMode>
  )
}

createRoot(document.getElementById('root')).render(
  <Root />,
)
