import React from 'react'
import { Outlet } from 'react-router-dom'
import MainFooter from '../components/navigation/MainFooter.jsx'
import MainHeader from '../components/navigation/MainHeader.jsx'

function MainLayout() {
  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--text-primary)] transition-colors duration-300">
      <MainHeader />
      <main>
        <Outlet />
      </main>
      <MainFooter />
    </div>
  )
}

export default MainLayout
