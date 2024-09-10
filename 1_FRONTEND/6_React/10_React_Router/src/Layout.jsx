// This thing can be done in the App.jsx file but we are making a new file
// As we want the Header and Footer to be common in all pages we can use a feature of router which is Outlet

import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />   {/* This outlet is the part which we want to change again and again */}
      <Footer />
    </>
  )
}

export default Layout
